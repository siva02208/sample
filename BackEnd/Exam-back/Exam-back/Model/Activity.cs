using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Exam_back.Model
{
    public class Activity
    {
        [Key]
        public int ActivityId { get; set; }
        [ForeignKey("UserId")]
        [Required]
        public int Id { get; set; }
        public string Title { get; set; }   
        public string Description { get; set; }
    }
}
