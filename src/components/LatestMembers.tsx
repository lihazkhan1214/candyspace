import member1 from "@/assets/member-1.jpg";
import member2 from "@/assets/member-2.jpg";
import member3 from "@/assets/member-3.jpg";
import member4 from "@/assets/member-4.jpg";
import member5 from "@/assets/member-5.jpg";
import member6 from "@/assets/member-6.jpg";

const members = [
  { name: "Katelyn", age: 20, status: "University Student", image: member1, borderColor: "border-[#ed1d85]" },
  { name: "Geneliza", age: 19, status: "University Student", image: member2, borderColor: "border-[#ed1d85]" },
  { name: "Melanie", age: 21, status: "University Student", image: member3, borderColor: "border-[#ed1d85]" },
  { name: "Lorraine", age: 21, status: "University Student", image: member4, borderColor: "border-[#ed1d85]" },
  { name: "Stephanie", age: 20, status: "University Student", image: member5, borderColor: "border-[#ed1d85]" },
  { name: "Margaret", age: 19, status: "University Student", image: member6, borderColor: "border-[#ed1d85]" },
];

const LatestMembers = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ed1d85]">Latest Members</h2>
          <a href="#" className="text-[hsl(199,100%,40%)] hover:underline font-medium">View All Members »</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {members.map((member) => (
            <div key={member.name} className="flex  bg-gray-300 border-b-4 border-[#ed1d85] p-3 rounded-lg flex-col items-center">
              <div className={`relative w-32 h-32 md:w-36 md:h-36 rounded-full border-[5px] ${member.borderColor} p-1.5 bg-gray-100 mb-3 hover:scale-105 transition-transform cursor-pointer shadow-md`}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold text-xl ">{member.name}</h3>
              <p className=" text-black">{member.age} years old</p>
              <p className="  text-black">{member.status}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestMembers;
