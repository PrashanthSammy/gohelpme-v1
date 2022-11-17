import React from 'react'

function ImageSlider({image}) {

  console.log(image)
  return (
    <div class="flex overflow-scroll scrollbar-hide gap-4 md:grid-cols-1 lg:mt-4">
        <img
          alt="Les Paul"
          src={`${image}`}
        />

          <img
            alt="Les Paul"
            src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="aspect-square w-full rounded-xl object-cover"
          />

          <img
            alt="Les Paul"
            src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="aspect-square w-full rounded-xl object-cover"
          />

          <img
            alt="Les Paul"
            src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="aspect-square w-full rounded-xl object-cover"
          />

          <img
            alt="Les Paul"
            src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="aspect-square w-full rounded-xl object-cover"
          />
      </div>
  )
}

export default ImageSlider