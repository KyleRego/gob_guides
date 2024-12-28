using Microsoft.EntityFrameworkCore;

namespace GobGuides.Data;

public class AppDbContext(DbContextOptions opts) : DbContext(opts)
{

}
