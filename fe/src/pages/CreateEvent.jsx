import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { eventsApi } from "../api/events";

function CreateEvent() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });

  function getMinDateTime() {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 16);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const payload = {
        title: formData.title,
        description: formData.description,
        date: new Date(formData.date).toISOString(),
        location: formData.location,
      };

      const createdEvent = await eventsApi.create(payload);
      console.log("Event created:", createdEvent);
      navigate("/");
    } catch (err) {
      setError(err.message || "Failed to create event");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6 text-vd-text max-w-2xl mx-auto">
      <h1 className="text-2xl font-heading font-semibold mb-6">Create New Event</h1>

      {error && (
        <div className="mb-4 p-3 rounded-btn bg-vd-rose/10 border border-vd-rose/30 text-vd-rose text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="title" className="field-label">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            value={formData.title}
            onChange={handleChange}
            placeholder="Event Title"
            className="field-input"
          />
        </div>

        <div>
          <label htmlFor="description" className="field-label">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            value={formData.description}
            onChange={handleChange}
            placeholder="Some Description for the Event"
            className="field-input resize-none"
          />
        </div>

        <div>
          <label htmlFor="date" className="field-label">
            Date & Time
          </label>
          <input
            id="date"
            name="date"
            type="datetime-local"
            required
            min={getMinDateTime()}
            value={formData.date}
            onChange={handleChange}
            className="field-input"
          />
        </div>

        <div>
          <label htmlFor="location" className="field-label">
            Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            required
            value={formData.location}
            onChange={handleChange}
            placeholder="Schloßbezirk 10, 76131 Karlsruhe"
            className="field-input"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-accent w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
}

export default CreateEvent;
