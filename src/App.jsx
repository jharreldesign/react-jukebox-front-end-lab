import { useState, useEffect } from 'react';
import * as trackService from './services/trackService';

import TrackList from './components/TrackList';
import TrackDetail from './components/TrackDetail';
import TrackForm from './components/TrackForm';

import './App.css'

const App = () => {
  const [trackList, setTrackList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const tracks = await trackService.index();
        if (tracks.error) throw new Error(tracks.error);
        setTrackList(tracks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTracks();
  }, []);

  const updateSelected = (track) => {
    setSelected(track);
  };

  const handleFormView = () => {
    setIsFormOpen(!isFormOpen);
    setIsEditing(false);
    setSelected(null);
  };

  const handleEditTrack = (track) => {
    setSelected(track);
    setIsEditing(true);
    setIsFormOpen(true);
  };

  const handleAddTrack = async (formData) => {
    try {
      const newTrack = await trackService.create(formData);
      setTrackList([newTrack, ...trackList]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateTrack = async (formData) => {
    try {
      const updatedTrack = await trackService.update(selected._id, formData);
      setTrackList(trackList.map((track) => (track._id === updatedTrack._id ? updatedTrack : track)));
      setSelected(updatedTrack);
      setIsEditing(false);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTrack = async (id) => {
    try {
      await trackService.remove(id);
      setTrackList(trackList.filter((track) => track._id !== id));
      setSelected(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TrackList
        trackList={trackList}
        updateSelected={updateSelected}
        handleFormView={handleFormView}
        handleEditTrack={handleEditTrack}
        handleDeleteTrack={handleDeleteTrack}
        isFormOpen={isFormOpen}
      />
      {isFormOpen ? (
        <TrackForm
          handleAddTrack={handleAddTrack}
          handleUpdateTrack={handleUpdateTrack}
          isEditing={isEditing}
          selected={selected}
        />
      ) : (
        <TrackDetail selected={selected} />
      )}
    </>
  );
};

export default App;
