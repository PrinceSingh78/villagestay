import React, { useState } from 'react';
import VillageCard from '../components/VillageCard';
import ChatAssistant from '../components/ChatAssistant';

const villageData = [
  {
    id: 'kumaon',
    title: 'Kumaon, Uttarakhand',
    location: 'uttarakhand',
    activity: 'trekking',
    description: 'Stay with the locals, trek the hills, and eat traditional food.',
    image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTvAXwK63dhHb0R2xRKOqlOKWLbgjzQVrZeHAFA6tdeOxIT7VqbnWSqrYSa2Fb7-77VSy7RFw4Lj52ggkIdduEhDCp-vQpgi1v5OtBf0g'
  },
  {
    id: 'khimsar',
    title: 'Khimsar, Rajasthan',
    location: 'rajasthan',
    activity: 'culture',
    description: 'Experience desert life with folk performances and camel rides.',
    image: 'https://hindi.oneindia.com/img/2021/03/khimsarsanddunesvillagenagaurrajasthanphoto5-1616582035.jpg'
  },
  {
    id: 'mawlynnong',
    title: 'Mawlynnong, Meghalaya',
    location: 'meghalaya',
    activity: 'food',
    description: 'Asia’s cleanest village with stunning natural beauty.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToGitcWpqbiN3QX21ZmK08QWwOfzO77zzaA&s'
  },
  {
    id: 'gokarna',
    title: 'Gokarna, Karnataka',
    location: 'karnataka',
    activity: 'beach',
    description: 'Gokarna is one of the most popular beach destinations for tourists in India.',
    image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQpRj1d-PgrIyBil9OLJWcAMZ4-YUzlH2H_2xHYs3tbWGkDVVSxE5wh2ugjJ3EB7o88e4F9yAqkQ9N2SSDpx-O0fVQtTWdbAUQmgyOVnw'
  }
];

const Home = () => {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [activity, setActivity] = useState('');
  const [filteredData, setFilteredData] = useState(villageData);

  const handleFilter = () => {
    const result = villageData.filter((v) => {
      return (
        (search === '' || v.title.toLowerCase().includes(search.toLowerCase())) &&
        (location === '' || v.location === location) &&
        (activity === '' || v.activity === activity)
      );
    });
    setFilteredData(result);
  };

  return (
    <div className="container">
      <h2>Explore Rural Destinations</h2>
      <div className="filters">
        <input type="text" placeholder="Search destinations..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">All Locations</option>
          <option value="uttarakhand">Uttarakhand</option>
          <option value="rajasthan">Rajasthan</option>
          <option value="meghalaya">Meghalaya</option>
          <option value="karnataka">Karnataka</option>
        </select>
        <select value={activity} onChange={(e) => setActivity(e.target.value)}>
          <option value="">All Activities</option>
          <option value="trekking">Trekking</option>
          <option value="culture">Cultural</option>
          <option value="food">Food</option>
          <option value="beach">Beach</option>
        </select>
        <button className="btn" onClick={handleFilter}>Filter</button>
      </div>

      <div className="grid">
        {filteredData.length === 0 ? (
          <p>No matching destinations found.</p>
        ) : (
          filteredData.map((village) => (
            <VillageCard
              key={village.id}
              id={village.id}
              title={village.title}
              description={village.description}
              image={village.image}
            />
          ))
        )}
      </div>
      <ChatAssistant />
    </div>
  );
};

export default Home;
