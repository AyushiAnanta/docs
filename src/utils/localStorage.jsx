
const DocData= [
      {
        "index": 0,
        "name": "hiiiiii",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloribus sint eius,"
      },
      {
        "index": 1,
        "name": "I",
        "content": "Sunt doloribus sint eius, necessitatibus mollitia molestiae  explicabo natus corrupti "
      },
      {
        "index": 2,
        "name": "am",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt doloribus sint eius,"
      },
      {
        "index": 3,
        "name": "Ayushi",
        "content": "Sunt doloribus sint eius, necessitatibus mollitia molestiae  explicabo natus corrupti "
      },
      {
        "index": 4,
        "name": "Ananta",
        "content": "laudantium magni itaque repudiandae error eum et debitis, neque praesentium autem vero."
      }
    ]

  
export const setLocalStorage = () => {
    localStorage.setItem('data', JSON.stringify(DocData));
};

export const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem('data')) || [];
};
