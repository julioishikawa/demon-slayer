import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { TechniqueItem } from "../../components/TechniqueItem";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

import { Container, Form, CharImage, Scrollbar } from "./styles";

export function CreateOni() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [form, setForm] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [description, setDescription] = useState("");
  const [style, setStyle] = useState("");

  const avatarURL = `${api.defaults.baseURL}/files/${null}`;
  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [titles, setTitles] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  const isAgeValid = (age >= 4 && age <= 1000) || age === "?";
  const isHeightValid = (height >= 0.1 && height <= 30) || height === "?";
  const isWeightValid = (weight >= 10 && weight <= 999) || weight === "?";
  const isTitleValid =
    (newTitle.length >= 3 && newTitle.length <= 30) || newTitle === "?";
  const isSkillValid = newSkill.length >= 3 || newSkill === "?";

  const navigate = useNavigate();

  function handlePreviewImage() {
    const uploadButton = document.getElementById("avatar");

    const image = document.querySelector(".image");

    uploadButton.addEventListener("change", () => {
      image.classList.remove("hide");
    });
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  function handleAddSkill() {
    if (!newSkill) {
      return alert("You need to put a value to add a technique.");
    }

    if (!isSkillValid) {
      return alert("Your technique name must have more than 3 letters.");
    }

    setSkills((prevState) => [...prevState, newSkill]);

    setNewSkill("");
  }

  function handleAddTitle() {
    if (!newTitle) {
      return alert("You need to put a value to add a title.");
    }

    if (!isTitleValid) {
      return alert("Your title must be between 3 and 30 letters.");
    }

    setTitles((prevState) => [...prevState, newTitle]);

    setNewTitle("");
  }

  function handleRemoveSkill(skillDeleted) {
    setSkills((prevState) =>
      prevState.filter((skill) => skill !== skillDeleted)
    );
  }

  function handleRemoveTitle(titleDeleted) {
    setTitles((prevState) =>
      prevState.filter((title) => title !== titleDeleted)
    );
  }

  async function handleNewNote() {
    if (
      !name ||
      !age ||
      !gender ||
      !form ||
      !height ||
      !weight ||
      !description ||
      !style
    ) {
      return alert("Please fill in all fields to complete your character.");
    }

    if (!avatarFile) {
      return alert("Please upload an image for your character.");
    }

    if (!isAgeValid) {
      return alert("Your age must be between 4 and 1000 years old.");
    }

    if (!isHeightValid) {
      return alert(
        "Your height must be between 0.100 milimeters and 30 meters."
      );
    }

    if (!isWeightValid) {
      return alert("Your weight must be between 10 and 999 kilograms.");
    }

    if (skills.length === 0) {
      return alert("You need to create a technique for your character.");
    }

    if (newSkill) {
      return alert(
        'You left one technique in the field to be add. Please click in the "+" button to add it or left the field empty.'
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
    });

    const fileUploadForm = new FormData();
    fileUploadForm.append("avatar", avatarFile);

    await api.patch(`/notes/avatar/${note.data.id}`, fileUploadForm);

    alert("Character added successfully!");
    navigate("/communitycharacters");
  }

  function handleDiscardMovie() {
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
              <h1>New Demon</h1>
            </header>

            <div className="infos">
              <Input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
              />
              <Input
                placeholder="Gender"
                onChange={(e) => setGender(e.target.value)}
              />
            </div>

            <div className="infos">
              <Input
                placeholder="Form"
                onChange={(e) => setForm(e.target.value)}
              />
              <Input
                placeholder="Height"
                onChange={(e) => setHeight(e.target.value)}
              />
              <Input
                placeholder="Weight"
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <h2>Style / Kekkijutsu</h2>
            <Input
              placeholder="Example: Blood Demon Art"
              onChange={(e) => setStyle(e.target.value)}
            />

            <div>
              <h2>Techniques</h2>
              <div className="tags">
                {skills.map((tag, index) => (
                  <TechniqueItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveSkill(tag)}
                  />
                ))}
                <TechniqueItem
                  isNew
                  placeholder="Example: Compass Needle"
                  onChange={(e) => setNewSkill(e.target.value)}
                  value={newSkill}
                  onClick={handleAddSkill}
                />
              </div>
            </div>

            <Textarea
              placeholder="About"
              onChange={(e) => setDescription(e.target.value)}
            />

            <div>
              <h2>Title's</h2>
              <div className="tags">
                {titles.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTitle(tag)}
                  />
                ))}
                <NoteItem
                  isNew
                  placeholder="Example: Upper Moon Three"
                  onChange={(e) => setNewTitle(e.target.value)}
                  value={newTitle}
                  onClick={handleAddTitle}
                />
              </div>
            </div>

            <CharImage>
              <label htmlFor="avatar">
                <input
                  type="file"
                  id="avatar"
                  onClick={handlePreviewImage}
                  onChange={handleChangeAvatar}
                />
                Upload Image
              </label>
              <img className="image hide" src={avatar} alt="Character Image" />
            </CharImage>

            <div className="buttons">
              <Button title="Create" onClick={handleNewNote} />
              <Button title="Delete" onClick={handleDiscardMovie} />
            </div>
          </Form>
        </main>
      </Scrollbar>
    </Container>
  );
}
