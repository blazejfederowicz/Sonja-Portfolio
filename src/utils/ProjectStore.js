import image1 from '../assets/images/image1.png'
import project1 from '../assets/images/project1.jpg'
import project2 from '../assets/images/project2.jpg'
import project3 from '../assets/images/project3.jpg'

const CreateProject = (()=>{
            let index = 1
            const heights = [200,400]
            return class CreateProject{
                constructor(title,src,description,heightIndex){
                    this.index = index++
                    this.title= title;
                    this.description= description
                    this.src=src
                    this.height= heights[heightIndex]
                }
                
            }
        })();


const projectsArr = [
    new CreateProject("Lorem Ipsum",project1, "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum", 0),
    new CreateProject("Lorem Ipsum",project2, "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",1),
    new CreateProject("Lorem Ipsum",project3, "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",1),
    new CreateProject("Lorem Ipsum",image1, "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",0),
    new CreateProject("Lorem Ipsum",image1, "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",0),
]

export default projectsArr;