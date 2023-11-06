using Microsoft.EntityFrameworkCore;
using Exam_back.Model;

namespace Exam_back.Model
{
    public class DataConnect:DbContext
    {
        public DataConnect(DbContextOptions<DataConnect> options) : base(options) { }  
        public DbSet<User> Users { get; set; }
        public DbSet<Exam_back.Model.Activity> Activity { get; set; } = default!;
    }
}
