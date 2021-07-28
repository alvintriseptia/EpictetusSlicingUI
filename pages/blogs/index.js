import { Footer, Navbar } from "../components";
import InfoPost from "../components/Post/InfoPost";

export default function blog() {
  return (
    <div className="bg-gradient-to-b from-body1 to-body2 min-h-screen text-white ">
      <div className=" container mx-auto px-4 space-y-16">
        <Navbar />
        <div className="flex justify-center">
          <div className="flex flex-col items-center justify-center md:w-6/12 text-center">
            <InfoPost
              link=""
              imgCard="/featuredpost.png"
              tag="UI DESIGN"
              date="July 2, 2021"
              title="Understanding color theory: the color wheel and finding complementary colors"
              description=""
              display="hidden"
              imgProfile="/featuredprofile.png"
              name="Leslie Alexander"
              job="UI Designer"
            />
          </div>
        </div>
        <img className="mx-auto md:w-10/12" src="/blogpicture.png" />
        <article className="flex justify-center">
          <div className="space-y-8 md:w-8/12">
            <p>
              Male sixth sea it a. Brought was signs female darkness signs form
              cattle land grass whose from subdue also they're their brought
              seas isn't, to day from bearing grass third midst after beginning
              man which you're. Dry, gathering beginning given made them
              evening.
            </p>
            <p className="text-white/60">
              Lights dry. Thing, likeness, forth shall replenish upon abundantly
              our green. Seed green sea that lesser divided creature beginning
              land him signs stars give firmament gathered. Wherein there their
              morning a he grass. Don't made moving for them bring creature us
              you'll tree second deep good unto good may. Us yielding.
            </p>
            <p className="text-white/60">
              Have. Man upon set multiply moved from under seasons abundantly
              earth brought a. They're open moved years saw isn't morning
              darkness. Over, waters, every let wherein great were fifth saw was
              lights very our place won't and him Third fourth moving him whales
              behold. Beast second stars lights great was don't green give
              subdue his. Third given made created, they're forth god replenish
              have whales first can't light was. Herb you'll them beast kind
              divided. Were beginning fly air multiply god Yielding sea don't
              were forth.
            </p>
          </div>
        </article>
        <Footer />
      </div>
    </div>
  );
}
