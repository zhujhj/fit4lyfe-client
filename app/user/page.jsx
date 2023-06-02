// const page = () => {
//   return (
//     <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>User</div>
//   )
// }

// export default page

const page = () => {
    const styles = {
        display: 'flex',
    //   alignItems: 'center',
        padding: '10px' ,
        justifyContent: 'center',
        height: '100vh',
    };

    const link = {
        display: 'flex',
    //   alignItems: 'center',
        padding: '10px' ,
        justifyContent: 'center',
        height: '10vh',
    };

    const button = {

    }
  
    return (
    //   <div>
    //     <h2 style={styles}>User Profile</h2>
    //     <div style={link}>
    //         <a href='/'>
    //             Back Home
    //         </a>
    //     </div>
    //   </div>
    <section className="w-full flex-left flex-col mb-[375px]">
        {/* <h1 className="head_text text-left">
            User Profile
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">
                Your Statistics
            </span>
        </h1>
        <p className="desc text-left">
            BLAHALBALDWIN IAWBD AOIWBD AIOWBD OAIBWD OIABWD OIABWDIO AWBDOIA BWD
        </p> */}
        <div className="container mx-auto mt-8">
        <h1 className="head_text font-semibold mb-4">
        User Profile
        <br className="max-md:hidden" />
            <span className="orange_gradient text-center">
                Jason Zhu
            </span>
        </h1>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
        <div className="flex">
          <div className="w-1/3">
            <p className="text-gray-600">Height:</p>
            <p className="text-gray-900 font-semibold">150 cm</p>
          </div>
          <div className="w-1/3">
            <p className="text-gray-600">Weight:</p>
            <p className="text-gray-900 font-semibold">60 kg</p>
          </div>
          <div className="w-1/3">
            <p className="text-gray-600">Age:</p>
            <p className="text-gray-900 font-semibold">20 years</p>
          </div>
        </div>
      </div>
    </div>
    <button>
      Edit
    </button>
    </section>
    );
  };
  
  export default page;