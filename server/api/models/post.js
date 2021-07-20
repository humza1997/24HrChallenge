const db = require("../dbConfig");
const { all } = require("../server");

class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.user = data.user;
    this.body = data.body;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const postData = await db.query("SELECT * FROM post");
        const post = postData.rows.map((p) => new Post(p));
        resolve(post);
      } catch (err) {
        reject("Error retrieving posts!");
      }
    });
  }

  static create(title, user, body) {
    return new Promise(async (resolve, reject) => {
      try {
        let postData = await db.query(
          `INSERT INTO post (title, user, body) VALUES (s1,s2,s3) RETURNING *`,
          [title, user, body]
        );
        let post = new Post(postData.rows[0]);
        resolve(post);
      } catch (err) {
        reject("Error creating post");
      }
    });
  }
}

module.exports = Post;
