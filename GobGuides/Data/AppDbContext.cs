using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

using GobGuides.Model;

namespace GobGuides.Data;

public class AppDbContext(DbContextOptions opts) : IdentityDbContext<AppUser>(opts)
{
    public required DbSet<Post> Posts { get; set; }
}
