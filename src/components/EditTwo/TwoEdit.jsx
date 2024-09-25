import { Box, TextField, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tesseract from "tesseract.js"; // Tesseract kutubxonasini import qilamiz

const TwoEdit = ({ open, setOpen }) => {
  const [reload, setReload] = useState(false);
  const [passportImage, setPassportImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [extractedPassportNumber, setExtractedPassportNumber] = useState(""); // Pasport raqamini saqlash uchun holat

  const handleEdit = (e) => {
    e.preventDefault();

    if (passportImage) {
      if (passportImage.type.startsWith("image/")) {
        const formData = new FormData();
        formData.append("consumer_address", open.consumer_address);
        formData.append("consumer_name", open.consumer_name);
        formData.append("consumer_passport_serial", open.consumer_passport_serial);
        formData.append("consumer_phone_number", open.consumer_phone_number);
        formData.append("duration", open.duration);
        formData.append("id", open.id);
        formData.append("passport_image", passportImage);
        formData.append("status", open.status);

        // Pasport rasmidan pasport raqamini chiqarish
        Tesseract.recognize(
          passportImage,
          'eng',
          {
            logger: (m) => console.log(m), // Jarayonni kuzatish
          }
        ).then(({ data: { text } }) => {
          console.log(text); // Matnni konsolga chiqarish
          const passportNumber = extractPassportNumber(text); // Pasport raqamini chiqarish funksiyasini chaqirish
          setExtractedPassportNumber(passportNumber); // Olingan raqamni holatda saqlash

          // Xuddi shu yerda siz pasport raqamini tekshirib ko'rishingiz mumkin
          if (passportNumber === open.consumer_passport_serial) {
            axios
              .put(`https://solihov.uz/contract/update`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
              })
              .then((res) => {
                setOpen(null);
                setReload((prev) => !prev);
                toast.success("Contract successfully updated!");
              })
              .catch((err) => {
                console.error(err);
                toast.error("Error updating the contract.");
              });
          } else {
            toast.error("Passport number does not match!"); // Agar pasport raqami mos kelmasa xato chiqaramiz
          }
        });
      } else {
        toast.error("Invalid file type! Please upload an image file.");
      }
    } else {
      toast.error("Please upload a passport image.");
    }
  };

  const extractPassportNumber = (text) => {
    // Rasm matnidan pasport raqamini ajratish uchun qidiruv logikasi
    const passportNumberRegex = /\b[A-Z0-9]+\b/; // Pasport raqamini qidirish uchun regex (bu misol sifatida)
    const match = text.match(passportNumberRegex);
    return match ? match[0] : ""; // Agar topilsa, birinchi mos keluvchi qiymatni qaytaradi
  };

  const handleFileChange = (e) => {
    setPassportImage(e.target.files[0]);
    setFileName(e.target.files[0]?.name || "");
  };

  return (
    <>
      <ToastContainer />
      <div className="edit_wrapper" onClick={() => setOpen(null)}></div>
      <form className="edit_modal two_edit" onSubmit={handleEdit}>
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <TextField
            name="consumer_address"
            label="Address"
            variant="outlined"
            value={open.consumer_address || ""}
            onChange={(e) =>
              setOpen({ ...open, consumer_address: e.target.value })
            }
          />
          <TextField
            name="consumer_name"
            label="Name"
            variant="outlined"
            value={open.consumer_name || ""}
            onChange={(e) =>
              setOpen({ ...open, consumer_name: e.target.value })
            }
          />
          <TextField
            name="consumer_passport_serial"
            label="Passport Serial"
            variant="outlined"
            value={open.consumer_passport_serial || ""}
            onChange={(e) =>
              setOpen({ ...open, consumer_passport_serial: e.target.value })
            }
          />
          <TextField
            name="consumer_phone_number"
            label="Phone Number"
            variant="outlined"
            value={open.consumer_phone_number || ""}
            onChange={(e) =>
              setOpen({ ...open, consumer_phone_number: e.target.value })
            }
          />
          <TextField
            name="duration"
            label="Duration"
            variant="outlined"
            value={open.duration || ""}
            onChange={(e) => setOpen({ ...open, duration: e.target.value })}
          />
          <TextField
            name="id"
            label="ID"
            variant="outlined"
            value={open.id || ""}
            onChange={(e) => setOpen({ ...open, id: e.target.value })}
          />

          <Box display={"flex"} flexDirection={"column"} alignItems={"start"} gap={2}>
            <Button
              variant="outlined"
              component="label"
            >
              Upload Passport Image
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleFileChange}
              />
            </Button>
            {fileName && (
              <Typography variant="body2" color="textSecondary">
                {fileName}
              </Typography>
            )}
          </Box>

          <TextField
            name="status"
            label="Status"
            variant="outlined"
            value={open.status || ""}
            onChange={(e) => setOpen({ ...open, status: e.target.value })}
          />
          <Button variant="contained" onClick={() => setOpen(null)}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="success">
            Save
          </Button>
        </Box>
      </form>
    </>
  );
};

export default TwoEdit;
