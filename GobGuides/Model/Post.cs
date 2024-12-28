namespace GobGuides.Model;

public class Post(string title,
                    string description) : EntityBase
{
    public string Title { get; set; } = title;

    public string Description { get; set; } = description;

    public required DateTime DateTime { get; set; }
}
