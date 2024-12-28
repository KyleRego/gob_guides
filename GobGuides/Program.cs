using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

using GobGuides.Data;
using GobGuides.Model;

string corsPolicyName = "myCorsPolicy";

var builder = WebApplication.CreateBuilder(args);

string clientOrigin = builder.Configuration["ClientAppOrigin"]
    ?? throw new InvalidOperationException(
        "Client origin missing from configuration"
    );

string sqliteConn = builder.Configuration["SQLiteDbConnString"]
    ?? throw new InvalidOperationException(
        "Database connection string missing from configuration");

builder.Services.AddCors(options =>
{
    options.AddPolicy(corsPolicyName, policy =>
    {
        policy.WithOrigins(clientOrigin)
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AppDbContext>(options =>
                                    options.UseSqlite(sqliteConn));

builder.Services.AddIdentity<AppUser, IdentityRole>()
    .AddEntityFrameworkStores<AppDbContext>()
    .AddDefaultTokenProviders();

builder.Services.AddControllers();

var app = builder.Build();

app.UseCors(corsPolicyName);

using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    dbContext.Database.Migrate();
}

if (app.Environment.IsDevelopment())
{
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
        options.RoutePrefix = string.Empty;
    });
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapSwagger();

app.MapGet("/", context =>
{
    context.Response.Redirect("/swagger");
    return Task.CompletedTask;
});

app.MapControllers();

app.Run();
