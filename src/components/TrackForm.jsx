import { useState, useEffect } from 'react';

const TrackForm = ({ handleAddTrack, handleUpdateTrack, isEditing, selected }) => {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
  });

  useEffect(() => {
    if (isEditing && selected) {
      setFormData({ title: selected.title, artist: selected.artist });
    }
  }, [isEditing, selected]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    if (isEditing) {
      handleUpdateTrack(formData);
    } else {
      handleAddTrack(formData);
    }
    setFormData({ title: '', artist: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="title"> Song Title: </label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="artist"> Song Artist: </label>
        <input
          id="artist"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
        />
        <button type="submit">{isEditing ? 'Update Song' : 'Add New Song'}</button>
      </form>
    </div>
  );
};

export default TrackForm;
