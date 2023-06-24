import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

import { Container, Form, Scrollbar } from "./styles";

export function CreateHashira() {
  const { user } = useAuth();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [form, setForm] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [description, setDescription] = useState("");
  const [style, setStyle] = useState("");
  const [goals, setGoals] = useState("");

  const avatarURL = `${api.defaults.baseURL}/files/${user.avatar}`;
  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [titles, setTitles] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  const isAgeValid = age >= 18 && age <= 40 || age === "?";
  const isHeightValid = height >= 1 && height <= 3 || height === "?";
  const isWeightValid = weight >= 40 && weight <= 595 || weight === "?";
  const isTitleValid = newTitle.length >= 3 && newTitle.length <= 20 || newTitle === "?";
  const isSkillValid = newSkill.length >= 3 && newSkill.length <= 20 || newSkill === "?";

  const navigate = useNavigate();

  function handleChangeAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  function handleAddSkill() {
    if (!newSkill) {
      return alert("You need to put a value to add a ability.");
    }

    if (!isSkillValid) {
      return alert("Your skill must be between 3 and 20 letters.");
    }

    setSkills((prevState) => [
      ...prevState, 
      newSkill,
    ]);

    setNewSkill("");
  }

  function handleAddTitle() {
    if (!newTitle) {
      return alert("You need to put a value to add a ability.");
    }

    if (!isTitleValid) {
      return alert("Your skill must be between 3 and 20 letters.");
    }

    setTitles((prevState) => [
      ...prevState, 
      newTitle,
    ]);

    setNewTitle("");
  }

  function handleRemoveSkill(skillDeleted) {
    setSkills(prevState => prevState.filter((skill) => skill !== skillDeleted));
  }

  function handleRemoveTitle(titleDeleted) {
    setTitles(prevState => prevState.filter((title) => title !== titleDeleted));
  }

  async function handleNewNote() {
    if (!name || !age || !gender || !form || !height || !weight  || !description || !style || !goals) {
      return alert("Please fill in all fields to complete your character.");
    }

    if (!isAgeValid) {
      return alert("Your minimum age must be 18 and maximum age must be 40 years old.");
    }

    if (!isHeightValid) {
      return alert("Your height must be between 1 and 3 meters.");
    }

    if(!isWeightValid) {
      return alert("Your weight must be between 40 and 595 kilograms.");
    }

    if (skills.length === 0) {
      return alert("You need to create a ability for your character.");
    }

    if (newSkill) {
      return alert(
        'You left one ability in the field to be add. Please click in the "+" button to add it or left the field empty.'
      );
    }

    if (titles.length === 0) {
      return alert("You need to create a title for your character.");
    }

    if (newTitle) {
      return alert(
        'You left one title in the field to be add. Please click in the "+" button to add it or left the field empty.'
      );
    }

    const note = await api.post("/notes", {
      name,
      age,
      gender,
      form,
      height,
      weight,
      description,
      style,
      skills,
      titles,
      goals,
    });

    const fileUploadForm = new FormData();
    fileUploadForm.append("avatar", avatarFile);

    await api.patch(`/notes/avatar/${note.data.id}`, fileUploadForm);
    
    alert("Character added successfully!");
    navigate("/hashiras");
  }

  function handleDiscardChar() {
    const userConfirmation = confirm(
      "All information about this character will be discarded... are you sure?"
    );

    if (userConfirmation) {
      navigate(-1);
    }
  }
  
  return (
    <Container>
      <Header />

      <Scrollbar>
        <main>
          <Form>
            <header>
              <h1>New Hashira</h1>
            </header>

            <div className="infos">
              <Input placeholder="Name" onChange={e => setName(e.target.value)} />
              <Input placeholder="Age" onChange={e => Number(setAge(e.target.value))} />
              <Input placeholder="Gender" onChange={e => setGender(e.target.value)} />
            </div>

            <div className="infos">
              <Input placeholder="Form" onChange={e => setForm(e.target.value)} />
              <Input placeholder="Height" onChange={e => setHeight(e.target.value)} />
              <Input placeholder="Weight" onChange={e => setWeight(e.target.value)} />
            </div>

            <h2>Style</h2>
            <Input placeholder="Example: Flame's Breathing" onChange={e => setStyle(e.target.value)} />

            <div>
              <h2>Skills</h2>
              <div className="tags">
                { 
                  skills.map((tag, index) => (
                    <NoteItem 
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveSkill(tag)}
                    />
                  ))
                }
                <NoteItem 
                  isNew 
                  placeholder="Example: Dancing Flaming" 
                  onChange={e => setNewSkill(e.target.value)}
                  value={newSkill}
                  onClick={handleAddSkill}
                />
              </div>
            </div>

            <Textarea placeholder="About" onChange={e => setDescription(e.target.value)} />

            <Textarea placeholder="Goals" clasName="goals" onChange={e => setGoals(e.target.value)} />

            <div>
              <h2>Title's</h2>
              <div className="tags">
                { 
                  titles.map((tag, index) => (
                    <NoteItem 
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTitle(tag)}
                    />
                  ))
                }
                <NoteItem 
                  isNew 
                  placeholder="Example: Hashira's Flame" 
                  onChange={e => setNewTitle(e.target.value)}
                  value={newTitle}
                  onClick={handleAddTitle}
                />
              </div>
            </div>


          <label htmlFor="avatar">
            <input type="file" onChange={handleChangeAvatar} />
          </label>

            <div className="buttons">
              <Button title="Create" onClick={handleNewNote} />
              <Button title="Delete" onClick={handleDiscardChar} />
            </div>
          </Form>
        </main>
      </Scrollbar>
    </Container>
  );
}
