namespace Football;

public class Player
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public int TeamId { get; set; }
    public string? TeamName { get; set; }
    public DateTime DateOfBirth { get; set; }
    public string? Position { get; set; }
    public string? Nationality { get; set; }
}
