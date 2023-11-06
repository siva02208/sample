using Exam_back.Model;
using Microsoft.EntityFrameworkCore;

namespace Exam_back
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAngularOrigins",
                builder =>
                {
                    builder.WithOrigins("http://localhost:51930")
                    .AllowAnyHeader()
                    .AllowAnyMethod();
                });
            });

            builder.Services.AddDbContext<DataConnect>(options =>
            {
                options.UseSqlServer("Server=7F9DAF0AA82A58D\\SQLEXPRESS;Database=Exam-Db;Trusted_Connection=True; TrustServerCertificate=True");
            });

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseRouting();
            app.UseCors("AllowAngularOrigins");

            app.UseAuthorization();
            app.UseAuthentication();
            app.UseHttpsRedirection();

            app.MapControllers();

            app.Run();


        }
    }
}