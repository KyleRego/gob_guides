using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using GobGuides.Model;
using GobGuides.Data;

namespace GobGuides.Controllers;

public class PostsController : AppController
{
    [Authorize, HttpPost]
    public async Task<IActionResult> CreatePost(Post post, AppDbContext db)
    {
        db.Add(post);
        await db.SaveChangesAsync();

        return Ok("This is my protected data");
    }

    [Authorize, HttpGet]
    public ActionResult<List<Post>> Index()
    {
        Post post1 = new("Test post", "Test") {
            DateTime = DateTime.Now
        };

        List<Post> result = [post1];

        return Ok(result);
    }
}
