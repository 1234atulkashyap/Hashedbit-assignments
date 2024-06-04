import  { useState } from 'react';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    favoriteColors: [],
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      let updatedColors = [...formData.favoriteColors];
      if (checked) {
        updatedColors.push(value);
      } else {
        updatedColors = updatedColors.filter(color => color !== value);
      }
      setFormData({
        ...formData,
        favoriteColors: updatedColors
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Here you could also send the formData to a backend server
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Survey Form</h1>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Gender:
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
          /> Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
          /> Female
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={formData.gender === 'Other'}
            onChange={handleChange}
          /> Other
        </label>
      </div>
      <div>
        <label>
          Favorite Colors:
          <input
            type="checkbox"
            name="favoriteColors"
            value="Red"
            checked={formData.favoriteColors.includes('Red')}
            onChange={handleChange}
          /> Red
          <input
            type="checkbox"
            name="favoriteColors"
            value="Green"
            checked={formData.favoriteColors.includes('Green')}
            onChange={handleChange}
          /> Green
          <input
            type="checkbox"
            name="favoriteColors"
            value="Blue"
            checked={formData.favoriteColors.includes('Blue')}
            onChange={handleChange}
          /> Blue
        </label>
      </div>
      <div>
        <label>
          Comments:
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SurveyForm;
