// root.js
function BlogPost(props) {
  return (
    <article className="blog-post">
      <h2>{props.title}</h2>
      <p><strong>Author:</strong> {props.author}</p>
      <p><strong>Date:</strong> {props.date}</p>
      <p>{props.content}</p>
    </article>
  );
}


function PublicBlogPost() {
  //Not too sure how to do this part...
}

function PrivateBlogPost() {
  return (
    <article className="private-posts">
      <h2>Private Post</h2>
      <p>The content of this post is private.</p>
    </article>
  );
}

function BlogList(props) {
  return (
    <div className="blog-list">
      {props.posts.map((post, index) => (
         post.isPrivate ? (
          <PrivateBlogPost key={index} />
        ) : (
        <BlogPost
          key={index}
          title={post.title}
          author={post.author}
          date={post.date}
          content={post.content}
        />
      )))}
    </div>
  );
}

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <p>{props.tagline}</p>
    </header>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>© {props.year} My Blog. All Rights Reserved.</p>
    </footer>
  );
};

function App(props) {
  const blogPosts = [
    {
      title: 'My First Blog Post',
      author: 'John Doe',
      date: 'June 1, 2023',
      content: 'Welcome to my first blog post! Today, I want to share my journey into the world of blogging. It has been an exciting experience so far, and I can’t wait to see where this path leads me.',
      isPrivate: true
    },
    {
      title: 'My Second Blog Post',
      author: 'Jane Smith',
      date: 'June 5, 2023',
      content: 'In this post, I’m discussing the importance of work-life balance. It’s essential to find time for both professional and personal activities to maintain overall well-being.',
      isPrivate: false
    },
    {
      title: 'A Day in the Life',
      author: 'Alice Johnson',
      date: 'June 10, 2023',
      content: 'Ever wondered what a day in my life looks like? Join me as I walk you through my daily routine, from morning coffee to evening relaxation.',
      isPrivate: false
    },
    {
      title: 'Tips for Healthy Eating',
      author: 'Bob Lee',
      date: 'June 15, 2023',
      content: 'Eating healthy doesn’t have to be complicated. Here are some simple and practical tips to help you make better food choices every day.',
      isPrivate: true
    },
    {
      title: 'Traveling on a Budget',
      author: 'Susan White',
      date: 'June 20, 2023',
      content: 'Dreaming of traveling the world but worried about the cost? This post covers my top tips for seeing new places without breaking the bank.',
      isPrivate: false
    }
  ];

  return (
  <div>
    <Header title="My Blog" tagline="A blog about everything" />
    <BlogPost
        title="My First Blog Post"
        author="John Doe"
        date="June 1, 2023"
        content="Welcome to my first blog post! Today, I want to share my journey into the world of blogging. It has been an exciting experience so far, and I can’t wait to see where this path leads me."
      />
    <BlogList posts={blogPosts} />
    <Footer year={props.year} />
    {/* Your other components will go here */}
  </div>
  
);
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)

//      <header h1>My Blog</header>
//<header p>A blog about</header>
//title="My Blog" tagline="A blog about everything" 