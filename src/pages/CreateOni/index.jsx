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

  const isAgeValid = age >= 4 && age <= 1000;
  const isWeightValid = weight >= 10 && weight <= 999;
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

  function formatNumber(value) {
    const numericValue = value
      .toString()
      .replace(/[^0-9]/g, "")
      .slice(0, 3);

    return numericValue || "";
  }

  function formatHeight(value) {
    const heightValue = value
      .toString()
      .replace(/[^0-9]/g, "")
      .slice(0, 4);

    if (heightValue.length >= 3) {
      const integerPart = heightValue.slice(0, -2);
      const decimalPart = heightValue.slice(-2);

      return `${integerPart}.${decimalPart}` || "";
    } else {
      return heightValue || "";
    }
  }

  const formattedHeight = formatHeight(height);
  const isHeightValid =
    (formattedHeight >= 0.1 &&
      formattedHeight <= 30 &&
      formattedHeight.length >= 4) ||
    (formattedHeight >= 0.1 &&
      formattedHeight <= 30 &&
      formattedHeight.length === 5);

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

  function handleKeyDownSkill(e) {
    if (e.key === "Enter") {
      handleAddSkill();
    }
  }

  function handleRemoveSkill(skillDeleted) {
    setSkills((prevState) =>
      prevState.filter((skill) => skill !== skillDeleted)
    );
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

  function handleKeyDownTitle(e) {
    if (e.key === "Enter") {
      handleAddTitle();
    }
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
        "Your height must be between 0.1 cm and 30 meters. Example: 0.01 or 10.01"
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
      height: formattedHeight,
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
              <div className="box">
                <h2>Name</h2>

                <Input
                  placeholder="Ipsum"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="box">
                <h2>Age</h2>

                <Input
                  placeholder="876"
                  value={formatNumber(age)}
                  onChange={(e) => setAge(e.target.value)}
                  maxLength="3"
                />
              </div>

              <div className="box">
                <h2>Gender</h2>

                <Input
                  placeholder="Female"
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </div>

            <div className="infos">
              <div className="box">
                <h2>Form</h2>

                <Input
                  placeholder="Demon"
                  onChange={(e) => setForm(e.target.value)}
                />
              </div>

              <div className="box">
                <h2>Height</h2>

                <Input
                  placeholder="12.24"
                  value={formatHeight(height)}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>

              <div className="box">
                <h2>Weight</h2>

                <Input
                  placeholder="245"
                  value={formatNumber(weight)}
                  onChange={(e) => setWeight(e.target.value)}
                  maxLength="3"
                />
              </div>
            </div>

            <div className="box">
              <h2>Style / Kekkijutsu</h2>
              <Input
                placeholder="Example: Blood Demon Art"
                onChange={(e) => setStyle(e.target.value)}
              />
            </div>

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
                  onKeyDown={handleKeyDownSkill}
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
                  onKeyDown={handleKeyDownTitle}
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
