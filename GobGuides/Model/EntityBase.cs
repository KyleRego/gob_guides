namespace GobGuides.Model;

public abstract class EntityBase
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
}
