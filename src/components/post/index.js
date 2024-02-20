import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";
const BlogPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ title: "", body: "", userId: "" });
  const [resData, setResData] = useState();
  const fetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res.data);
      setPosts(res.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then(function (response) {
  //       setLoading(false);
  //       // handle success
  //       setPosts(response.data);
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  // }, []);

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   axios.post(
  //     "https://jsonplaceholder.typicode.com/posts",
  //     JSON.stringify({
  //       title: formData.title,
  //       body: formData.body,
  //       userId: formData.userId,
  //     })
  //   );
  // }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   axios.put(
  //     "https://jsonplaceholder.typicode.com/posts/1",
  //     JSON.stringify({
  //       id: formData.id,
  //       title: formData.title,
  //       body: formData.body,
  //       userId: formData.userId,
  //     })
  //   );
  // }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   axios.delete("https://jsonplaceholder.typicode.com/posts/1");
  // }
  return (
    <Fragment>
      {/* <h2>BlogPost</h2>
      {/* {loading ? (
        <div style={{ color: "orange", fontSize: "30px" }}>Loading...</div>
      ) : (
        posts?.map((item) => (
          <div key={item.id}>
            <h4>{item.title}</h4>
          </div>
        ))
      )} */}
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.id}
          onChange={handleChange}
          name="id"
        />
        <input
          type="text"
          value={formData.title}
          onChange={handleChange}
          name="title"
        />
        <input
          type="text"
          value={formData.body}
          onChange={handleChange}
          name="body"
        />
        <input
          type="text"
          value={formData.userId}
          onChange={handleChange}
          name="userId"
        />
        <input type="submit" value="Submit" />
      </form>{" "}
      * */}

      <button onClick={fetchData}>fetch</button>

      {posts?.map((posts) => (
        <div key={posts.id}>
          <h4>{posts.title}</h4>
        </div>
      ))}
    </Fragment>
  );
};
export default BlogPost;
