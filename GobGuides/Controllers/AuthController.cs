using GobGuides.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace GobGuides.Controllers;

public record LoginDto
{
    public required string Email { get; set; }
    public required string Password { get; set; }
}

public class AuthController : AppController
{
    [HttpPost]
    public async Task<IActionResult> Login(LoginDto dto,
                            UserManager<AppUser> userManager,
                            SignInManager<AppUser> signInManager)
    {
        AppUser? user = await userManager.FindByEmailAsync(dto.Email);
        if (user == null) return Unauthorized("Invalid credentials");

        bool passwordValid = await userManager.CheckPasswordAsync(
                                                    user, dto.Password);
        if (!passwordValid) return Unauthorized("Invalid credentials");

        await signInManager.SignInAsync(user, false);

        return Ok("Login successful");
    }

    [Authorize, HttpPost("Logout")]
    public async Task<IActionResult> Logout(SignInManager<AppUser> signInManager)
    {
        await signInManager.SignOutAsync();
        return Ok("Logout successful");
    }

    [Authorize, HttpPost("CheckAuthState")]
    public IActionResult CheckAuthState()
    {
        return Ok("You are authenticated.");
    }
}
