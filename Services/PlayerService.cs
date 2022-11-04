using System.Text.Json;

namespace Football.Services
{
    public interface IPlayerService
    {
        Task<List<Player>> GetPlayers();
    }

    public class PlayerService : IPlayerService
    {
        private const string _pathToPlayersFile = "Data\\PlayerGuess\\players.json";

        public async Task<List<Player>> GetPlayers()
        {
            var playersFilePath = this.GetPlayersFilePath();

            return await this.LoadPlayers(playersFilePath);
        }

        private string GetPlayersFilePath()
        {
            var currentDirectory = Directory.GetCurrentDirectory();
            
            var playersFilePath = Path.Combine(currentDirectory, _pathToPlayersFile);

            if (!File.Exists(playersFilePath))
            {
                throw new FileNotFoundException("Could not find players data file.");
            }

            return playersFilePath;
        }
        private async Task<List<Player>> LoadPlayers(string playersFilePath)
        {
            using FileStream openStream = File.OpenRead(playersFilePath);

            var options = new JsonSerializerOptions 
            {
                PropertyNameCaseInsensitive = true
            };

            var players = await JsonSerializer.DeserializeAsync<List<Player>>(openStream, options) 
                ?? new List<Player>();

            var brightonPlayers = players.Where(x => x.TeamId == 51).ToList();

            return players;
        }

    }
}