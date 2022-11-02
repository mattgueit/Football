using Microsoft.AspNetCore.Mvc;
using System.Net.WebSockets;

namespace Football.Controllers;

[ApiController]
[Route("[controller]")]
public class PlayersController : ControllerBase
{
    private readonly ILogger<PlayersController> _logger;

    public PlayersController(ILogger<PlayersController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<Player> Get()
    {
        return new List<Player>
        {
            new Player { Id = 1, Name = "Aaron Ramsdale" },
            new Player { Id = 2, Name = "Kieran Tierney" },
            new Player { Id = 3, Name = "Ben White" },
            new Player { Id = 4, Name = "Gabriel" },
            new Player { Id = 5, Name = "William Saliba" },
            new Player { Id = 6, Name = "Rob Holding" },
            new Player { Id = 7, Name = "Cedric Soares" },
            new Player { Id = 8, Name = "Takehiro Tomiyasu" },
            new Player { Id = 9, Name = "Oleksandr Zinchenko" },
            new Player { Id = 10, Name = "Thomas Partey" },
            new Player { Id = 11, Name = "Bukayo Saka" },
            new Player { Id = 12, Name = "Martin Odegaard" },
            new Player { Id = 13, Name = "Emile Smith Rowe" },
            new Player { Id = 14, Name = "Fabio Vieira" },
            new Player { Id = 15, Name = "Granit Xhaka" },
            new Player { Id = 16, Name = "Mohamed Elneny" },
            new Player { Id = 17, Name = "Albert Lokonga" },
            new Player { Id = 18, Name = "Gabriel Jesus" },
            new Player { Id = 19, Name = "Gabriel Martinelli" },
            new Player { Id = 20, Name = "Eddie Nketiah" },
            new Player { Id = 21, Name = "Reiss Nelson" },
            new Player { Id = 22, Name = "Marquinhos" },
            new Player { Id = 23, Name = "Matt Turner" }
        };
    }
}
