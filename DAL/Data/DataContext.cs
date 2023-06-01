using DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL.Data
{
    public class DataContext : DbContext
    {
        

     public DataContext(DbContextOptions<DataContext> option) : base(option)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("Server=DESKTOP-364AU0U\\SQLEXPRESS;Database=Auto; Trusted_Connection=true; TrustServerCertificate=true;");
            //optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=IntShop; Trusted_Connection=true; TrustServerCertificate=true;");
        }

        public DbSet<Car> Car { get; set; }
        public DbSet<CarType> CarType { get; set; }
    }
}