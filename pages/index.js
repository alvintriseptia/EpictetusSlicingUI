import "tailwindcss/tailwind.css";
import { Navbar, Footer, posts, CardPost, FeaturedPost } from "../components";
export default function Home(props) {
  return (
    <div className="bg-gradient-to-b from-body1 to-body2 min-h-screen text-white ">
      <div className=" container mx-auto px-4 space-y-16">
        <Navbar />
        <FeaturedPost />
        <div className="flex justify-center flex-wrap gap-3">
          {posts.map((post, index) => (
            <CardPost
              link="#"
              key={index}
              imgCard={post.imgCard}
              tag={post.tag}
              date={post.date}
              title={post.title}
              description={post.description}
              imgProfile={post.imgProfile}
              name={post.name}
              job={post.job}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
