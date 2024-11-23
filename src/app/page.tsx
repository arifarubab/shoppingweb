"use client";  // Ensure this is present for client-side rendering

import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import Footer from '../app/components/Footer'; // Import Footer component
import Header from '../app/components/Header'; // Import Header component



export default function Home() {
  return (
    <>
    <Header />

      <section className="hero">
       <div className="textContent text-md mr-10 items-center text-5xl">
  <h1 className="font-serif mt-10 mb-6">
    The Best Store To <br /> Shop Online <br /> RUBAB CLUB
  </h1>
  <p className="mb-8 text-lg">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> 
    Proin egestas orci quis mi convallis ipsum.
  </p>
  <Link 
    href="/ShopNowButton" 
    className="bg-black hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg"
  >
    Shop Now
  </Link>
</div>
 <div className="imageContent -ml-40 flex items-center justify-center">
  <Image 
    src={'/bagss.jpg'} 
    alt="Fashion Model" 
    layout="responsive"  // Ensures responsiveness
    width={1600}         // Base width
    height={1280}        // Base height
    className="w-full max-w-[2000px]" // Scales up to 2000px, adjusts with container
  />
</div>
</section>

      <section className="new-arrivals bg-gray-400 py-12 px-4 flex flex-col items-center mb-60">
        <h2 className="text-3xl text-black font-bold flex justify-items-center bg-pink-200">New Arrivals</h2>
        <p className="text-gray-600 font-serif mb-60">Discover our latest products!</p>
        <div className="image-grid">
          {/* New Arrival Item 1 */}
          <div className="group">
            <Image src="/menpic4.jpg" alt="Stylish Jacket" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Shirt Trouser</h3>
            <p className="text-gray-500 mt-1">$49.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>

          {/* New Arrival Item 2 */}
          <div className="group">
            <Image src="/menpic5.jpg" alt="Casual Sneakers" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Shirt Trouser</h3>
            <p className="text-gray-500 mt-1">$39.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>

          {/* New Arrival Item 3 */}
          <div className="group">
            <Image src="/menpic2.jpg" alt="Classic Watch" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Shirt Trouser</h3>
            <p className="text-gray-500 mt-1">$99.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>

          {/* New Arrival Item 4 */}
          <div className="group">
            <Image src="/menpic1.jpg" alt="Elegant Handbag" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Shirt Trouser</h3>
            <p className="text-gray-500 mt-1">$59.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          {/* New Arrival Item 5*/}
          <div className="group">
            <Image src="/men1.jpg" alt="Elegant Handbag" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Coat Pant</h3>
            <p className="text-gray-500 mt-1">$59.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          {/* New Arrival Item 6 */}
          <div className="group">
            <Image src="/men2.jpg" alt="Elegant Handbag" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Coat Pant</h3>
            <p className="text-gray-500 mt-1">$59.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          {/* New Arrival Item 7 */}
          <div className="group">
            <Image src="/child1.jpg" alt="Elegant Handbag" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Shirt Pant</h3>
            <p className="text-gray-500 mt-1">$59.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          {/* New Arrival Item 8 */}
          <div className="group">
            <Image src="/child2.jpg" alt="Elegant Handbag" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Shirt Pant</h3>
            <p className="text-gray-500 mt-1">$59.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </section>
      <Footer />
     
      <style jsx>{`
       
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .hero {
          display: flex;
          justify-content: space-between;
          padding: 50px 5%;
          background-color: #f5e4e3;
          align-items: center;
        }

         .textContent {
          max-width: 50%;
        }

        .textContent h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .textContent p {
          font-size: 1rem;
          margin-bottom: 20px;
        }
        .shopBtn {
          background-color: black;
          color: white;
          padding: 15px 30px;
          text-decoration: none;
          font-weight: bold;
        }

        .imageContent img {
          width: 400px;
          height: auto;
          border-radius: 10px;
        }

        .new-arrivals {
          padding: 3rem 0;
          text-align: center;
          background-color: #f5e4e3; /* Fixed background-color syntax */
          padding: 30px;
          border-radius: 20px;
        }

        .image-grid {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .group {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          width: 250px;
          transition: transform 0.3s ease;
        }

        .group:hover {
          transform: translateY(-5px);
        }

        .add-to-cart {
          background-color: #000;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          margin-top: 10px;
          cursor: pointer;
        }

        .add-to-cart:hover {
          background-color: #333;
        }
      `}</style>
    </>
  );
}
