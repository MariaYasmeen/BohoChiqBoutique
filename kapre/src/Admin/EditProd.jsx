import React, { useContext } from 'react'
import DBContext from '../Context/DBContext';

function EditProd() {
    const context = useContext(DBContext);
    const {products, setProducts, updateProd} = context;
    return (
        <div>
            <div className=' flex justify-center items-center h-screen'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 >Update Product</h1>
                    </div>
                    <div>
                        <input type="text"
                        value={products.title}
                        onChange={(e)=> setProducts({...products, title: e.target.value})}
                            name='title'
                        
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input type="text"
                        value={products.price}
                        onChange={(e)=> setProducts({...products, price: e.target.value})}
                            name='price'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input type="text"
                        value={products.imageURL}
                        onChange={(e)=> setProducts({...products, imageURL: e.target.value})}
                            name='imageurl'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                        value={products.category}
                        onChange={(e)=> setProducts({...products, category: e.target.value})}
                            name='category'
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                       <textarea cols="30" rows="4" 
                        value={products.desc}
                        onChange={(e)=> setProducts({...products, desc: e.target.value})}name='title'
                            placeholder='Product title'>

                       </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button onClick={updateProd}> Add Product  </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProd;