using Microsoft.EntityFrameworkCore;

using GobGuides.Data;

var builder = WebApplication.CreateBuilder(args);

string sqliteConn = builder.Configuration["SQLiteDbConnString"]
    ?? throw new InvalidOperationException(
        "Database connection string missing");

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(options =>
                                    options.UseSqlite(sqliteConn));

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    dbContext.Database.Migrate();
}

app.UseHttpsRedirection();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapGet("/", context =>
{
    context.Response.Redirect("/swagger");
    return Task.CompletedTask;
});

app.MapControllers();

app.Run();
