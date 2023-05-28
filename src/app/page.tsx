// import Lists from '../components/Lists/page'
// async function getData() {
//   const res = await fetch('https://api.codetabs.com/v1/loc?github=nomandhoni-cs/Showwand&branch=production');
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }
 
//   return res.json();
// }
export default async function Home() {
  // const data = await getData();
  // console.log(data);
  // const languageList = data.map((element)=>{
  //   <li>{element.language}</li>
  // })
  return (
    <div className="flex flex-col items-center min-h-screen py-2 container">
      <h1 className="text-6xl font-bold">BMI Calculator</h1>
      <p className="mt-3 text-2xl">
        A simple BMI calculator built with Next.js and Tailwind CSS
      </p>
    </div>
  )
}