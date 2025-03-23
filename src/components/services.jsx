import Navbar from "./Navbar"



function Service(){
    return(
        <>
     <Navbar/>
 <div className="w-screen h-full m-auto bg-amber-500 bg-no-repeat">
  <div className="xl:w-[70%] lg:w-[80%] md:w-[90%] m-auto md:px-0 px-4 md:my-10 bg-ambeblack dark:bg-white   rounded-xl overflow-hidden">
    {/* What I DO */}
    <section className=" w-full h-full flex flex-col justify-center md:py-20 py-10 md:px-20 px-2">
      {/* Heading */}
      <div className="w-fit">
        <h2 className="text-2xl font-bold text-black dark:text-black pb-2">What I Do</h2>
        <div className="rounded-t-full border-[1px] border-gray-500 dark:border-gray-400 overflow-hidden">
          <hr className="border-[3px] border-green-400 dark:border-green-600 w-[20%]" />
        </div>
      </div>
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4 mt-8">
        {/* 1 */}
        <div className="flex sm:gap-4 gap-1">
          <span className>
            <ion-icon className="sm:text-5xl text-3xl text-green-400 dark:text-green-600" name="code-slash-outline" />
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-black dark:text-black">Web Development</h3>
            <p className="text-white-400 dark:text-gray-700">
              Crafting responsive and intuitive websites tailored to your unique needs using cutting-edge
              technologies.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="flex sm:gap-4 gap-2">
          <span>
            <ion-icon className="sm:text-5xl text-3xl text-green-400 dark:text-green-600" name="browsers-outline" />
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-black dark:text-black">UI/UX Design</h3>
            <p className="text-dark dark:text-gray-700">Creating visually appealing and user-centric designs that enhance user
              experiences and engagement.</p>
          </div>
        </div>
        {/* 3 */}
        <div className="flex sm:gap-4 gap-2">
          <span>
            <ion-icon className="sm:text-5xl text-3xl text-green-400 dark:text-green-600" name="archive-outline" />
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-black dark:text-black">Custom CMS Solutions</h3>
            <p className="text-dark dark:text-gray-700">Building reusable and efficient CMS APIs to simplify website management and
              scalability.</p>
          </div>
        </div>
        {/* 4 */}
        <div className="flex sm:gap-4 gap-2">
          <span>
            <ion-icon className="sm:text-5xl text-3xl text-green-400 dark:text-green-600" name="phone-portrait-outline" />
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-black dark:text-black">Mobile App Dev't</h3>
            <p className="text-dark dark:text-gray-700">Designing and developing user-friendly mobile applications for iOS and Android,
              ensuring seamless performance and user satisfaction.</p>
          </div>
        </div>
        {/* 5 */}
        <div className="flex sm:gap-4 gap-2">
          <span>
            <ion-icon className="sm:text-5xl text-3xl text-green-400 dark:text-green-600" name="bag-check-outline" />
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-black dark:text-black">E-commerce Development</h3>
            <p className="text-dark dark:text-gray-700">Creating robust platforms to elevate your online business presence.</p>
          </div>
        </div>
        {/* 6 */}
        <div className="flex sm:gap-4 gap-2">
          <span>
            <ion-icon className="sm:text-5xl text-3xl text-green-400 dark:text-green-600" name="swap-horizontal-outline" />
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-black dark:text-black">API Integration</h3>
            <p className="text-dark dark:text-gray-700">Seamlessly connecting systems to enhance functionality and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>


        </>
    )
}
export default Service