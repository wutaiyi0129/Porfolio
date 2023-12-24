const Intro = () => {
  return (
    <>
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="after-effect after:left-52">About Me</h2>
        {/* About page title */}

        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center  ">
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
              <p className="text-gray-lite  dark:text-color-910 leading-7">
                    前端工程師，專職React以及Next.js，擁有豐富的跨平台開發經驗，製作過許多專案。致力於提升用戶體驗，善於團隊合作，追求卓越的網頁應用程式。喜歡把困難的問題簡單化，把複雜的議題用幾單的方式訴說， 喜歡解決問題，成功解決能讓我心滿意足
     
                 
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
             
Front-end engineer specializing in React and Next.js with extensive cross-platform development experience, having worked on numerous projects. Committed to enhancing user experience, skilled in teamwork, and dedicated to crafting exceptional web applications. Enjoys simplifying complex problems, articulating intricate issues in straightforward ways, and finds fulfillment in solving challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End pt-12 */}
    </>
  );
};

export default Intro;
