document.addEventListener('DOMContentLoaded', function () {
  const menuData = {
    manakish: {
      title: '١. منقوش',
      items: [
        { name: 'زعتر', sizes: { small: '30,000 ل.ل', large: '50,000 ل.ل' }, image: 'logozouhbi.png' },
        { name: 'جبنه', sizes: { small: '70,000 ل.ل', large: '140,000 ل.ل' }, image: 'logozouhbi.png' },
        { name: 'جبنه إكسترا', sizes: { standard: '170,000 ل.ل' }, image: 'logozouhbi.png' },
        { name: 'جبنه دره', sizes: { small: '100,000 ل.ل', large: '170,000 ل.ل' }, image: 'logozouhbi.png' },
        { name: 'جبنه خضرا', sizes: { small: '100,000 ل.ل', large: '170,000 ل.ل' }, image: 'logozouhbi.png' },
        { name: 'جبنه سجق', sizes: { small: '100,000 ل.ل', large: '190,000 ل.ل'}, image: 'logozouhbi.png' },
        
        { name: 'لحمه', sizes: { small: '70,000 ل.ل', large: '140,000 ل.ل' }, image: 'logozouhbi.png' },
        { name: 'لحمه مع جبنه', sizes: { small: '100,000 ل.ل', large: '170,000 ل.ل' }, image: 'logozouhbi.png' },
        { name: 'نص نص', sizes: { small: 'ل.ل', large: '100,000 ل.ل'}, image: 'logozouhbi.png' },
        { name: 'قريشه', sizes: { small: '50,000 ل.ل', large: '100,000 ل.ل'}, image: 'logozouhbi.png' },
        { name: 'قريشه مع جبنه', sizes: { small: '70,000 ل.ل', large: '150,000 ل.ل' }, image: 'logozouhbi.png' },
        { name: 'قريشه مع جبنه ودره و زيتون', sizes: { standard: '170,000 ل.ل' }, image: 'logozouhbi.png' },
        { name: 'تركيه', sizes: { small: '70,000 ل.ل', large: '130,000 ل.ل'  }, image: 'logozouhbi.png' },



      ]
    },



    soiree: {
      title: '٢. سواريه',
      items: [
        { name: 'كروسون جبنه', price: '50,000 ل.ل', image: 'logozouhbi.png' },
        { name: 'كروسون شوكولا', price: '50,000 ل.ل', image: 'logozouhbi.png' },
        { name: ' بيتزا', price: '40,000 ل.ل', image: 'logozouhbi.png' },
        { name: 'لحمه بعجين صغير', price: '40,000 ل.ل', image: 'logozouhbi.png' },
        { name: 'لحمه بعجين كبير', price: '80,000 ل.ل', image: 'logozouhbi.png' },
        { name: 'قريشه', price: '25,000 ل.ل' , image: 'logozouhbi.png'},
        { name: 'رقاقات جبنه فاهيتا', price: '40,000 ل.ل', image: 'logozouhbi.png' },
        { name: 'سبانغ كبير', price: '50,000 ل.ل', image: 'logozouhbi.png' },
        { name: 'سبانغ صغير ', price: '20,000 ل.ل', image: 'logozouhbi.png' },        
        { name: 'طرابسيه', price: '25,000 ل.ل', image: 'logozouhbi.png' },
        { name: 'اوزي', price: '100,000 ل.ل' , image: 'logozouhbi.png'},



        { name: 'دزينه رقاقات جبنه', price: '450,000 ل.ل' , image: 'logozouhbi.png'},
        { name: 'دزدينه  مشكل', price: '400,000 ل.ل' , image: 'logozouhbi.png'},
        { name: 'دزدينه لحمه بعجين صغير', price: '450,000 ل.ل', image: 'logozouhbi.png' },
        { name: 'دزدينه لحمه بعجين كبير', price: '900,000 ل.ل' , image: 'logozouhbi.png'},
        { name: 'دزينه رقاقات فاهيتا', price: '450,000 ل.ل', image: 'logozouhbi.png' },
        { name: 'دزينه طرابلسيه', price: '300,000 ل.ل' , image: 'logozouhbi.png'},
        { name: 'دزينه بعلبكيه', price: '300,000 ل.ل' , image: 'logozouhbi.png'},
        { name: 'دزينه سواريه اريشه ', price: '300,000 ل.ل' , image: 'logozouhbi.png'},
        { name: 'دزدينه سواريه سبانغ صغير', price: '240,000 ل.ل', image: 'logozouhbi.png' },
        { name: 'دزدينه سواريه سبانغ كبير', price: '400,000 ل.ل', image: 'logozouhbi.png' },
        { name: 'دزينه سواريه بيتزا', price: '450,000 ل.ل' , image: 'logozouhbi.png'},
        { name: 'دزدينه عجينة لحمه بعجين نيه و رقاقات', price: '300,000 ل.ل' , image: 'logozouhbi.png'},
      ]
    },
    kaak: {
      title: '٣. كعك',
      items: [
        { name: 'كعكه', price: '120,000 ل.ل' , image: 'logozouhbi.png'},
        { name: 'كعكه مع درة', price: '150,000 ل.ل' , image: 'logozouhbi.png'},
        { name: 'كعكه إكسترا', price: '150,000 ل.ل' , image: 'logozouhbi.png'},
        { name: 'كعكه مع خضره', price: '150,000 ل.ل' , image: 'logozouhbi.png'},
        { name: 'كعكه فاهيتا', price: '150,000 ل.ل' , image: 'logozouhbi.png'},

      ]
    },
    pizza: {
      title: '٤. بيتزا',
      items: [
        { name: 'ييتزا صغيرة', price: '150,000 ل.ل', image: 'logozouhbi.png'},
        { name: 'ييتزا وسط', price: '300,000 ل.ل' , image: 'logozouhbi.png'},
        { name: 'ييتزا عائلية', price: '900,000 ل.ل' , image: 'logozouhbi.png'},
        
       { name: 'ييتزا سجق', sizes: { small: '200,000 ل.ل', large: '650,000 ل.ل'  },
        image: 'logozouhbi.png'},




      ]
    },
    juices: {
      title: '٥. عصائر',
      items: [
    { name: 'Bonjes', price: '20,000 ل.ل', image: 'mrjus.png' },
    { name: 'Pepsi', price: '60,000 ل.ل', image: 'pepsi.webp' },
    { name: 'Marenda', price: '60,000 ل.ل', image: 'mernda.jpg' },
    { name: '7up', price: '60,000 ل.ل', image: '7up.jpg' },
    { name: 'Extra', price: '50,000 ل.ل', image: 'xtra.jpg' },
    { name: 'Tamar Hendi', price: '40,000 ل.ل', image: 'rinda.jpg' },
    { name: 'Laban 3ayran', price: '50,000 ل.ل', image: 'arann.jpg' },
   
      ]
    }
  };

  const container = document.getElementById('menu-container');

  Object.entries(menuData).forEach(([key, category]) => {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('menu-category');

    const title = document.createElement('div');
    title.classList.add('category-title');
    title.innerHTML = `${category.title} <span class="toggle-icon">▶</span>`;

    const itemsDiv = document.createElement('div');
    itemsDiv.classList.add('menu-items', 'hidden');

    category.items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('menu-item');

      if (item.image) {
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.classList.add('item-image');
        itemDiv.appendChild(img);
      }

      const textDiv = document.createElement('div');
      textDiv.classList.add('item-text');

      const nameEl = document.createElement('strong');
      nameEl.textContent = item.name;
      textDiv.appendChild(nameEl);

      if (item.sizes) {
        Object.entries(item.sizes).forEach(([size, price]) => {
          const sizeLine = document.createElement('div');
          sizeLine.textContent = `${size === 'small' ? 'صغير' : 'كبير'}: ${price}`;
          textDiv.appendChild(sizeLine);
        });
      } else if (item.price) {
        const priceEl = document.createElement('div');
        priceEl.textContent = item.price;
        textDiv.appendChild(priceEl);
      }

      itemDiv.appendChild(textDiv);
      itemsDiv.appendChild(itemDiv);
    });

    title.addEventListener('click', () => {
      const isOpen = itemsDiv.classList.toggle('open');
      itemsDiv.classList.toggle('hidden', !isOpen);
      const icon = title.querySelector('.toggle-icon');
      icon.style.transform = isOpen ? 'rotate(90deg)' : 'rotate(0deg)';
      itemsDiv.style.maxHeight = isOpen ? itemsDiv.scrollHeight + 'px' : '0px';

      // fade-in effect
      if (isOpen) {
        Array.from(itemsDiv.children).forEach((item, i) => {
          item.style.opacity = 0;
          item.style.transition = `opacity 0.4s ease ${i * 0.1}s`;
          requestAnimationFrame(() => item.style.opacity = 1);
        });
      }
    });




    categoryDiv.appendChild(title);
    categoryDiv.appendChild(itemsDiv);
    container.appendChild(categoryDiv);
  });



if (item.image) {
  const img = document.createElement('img');
  img.src = item.image;
  img.alt = item.name;
  img.classList.add('item-image');
  itemDiv.appendChild(img);
}

});
