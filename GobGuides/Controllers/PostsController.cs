using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using GobGuides.Model;

namespace GobGuides.Controllers;

public class PostsController : AppController
{
    [Authorize, HttpPost]
    public IActionResult CreatePost()
    {
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
