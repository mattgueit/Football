using Football.Services;
using Microsoft.AspNetCore.Mvc;

namespace Football.Controllers;

[ApiController]
[Route("[controller]")]
public class PlayersController : ControllerBase
{
    private readonly ILogger<PlayersController> _logger;
    private readonly IPlayerService _playerService;

    public PlayersController(ILogger<PlayersController> logger, IPlayerService playerService)
    {
        _logger = logger;
        _playerService = playerService;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        try
        {
            var players = await _playerService.GetPlayers();

            return this.Ok(players);
        }
        catch (Exception ex)
        {
            return this.BadRequest(ex);
        }
    }
}
