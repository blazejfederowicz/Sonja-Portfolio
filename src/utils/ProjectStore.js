import image1 from '../assets/images/image1.png'

const CreateProject = (()=>{
            let index = 1
            const heights = [200,400]
            return class CreateProject{
                constructor(title,src,heightIndex){
                    this.index = index++
                    this.title= title;
                    this.src=src
                    this.height= heights[heightIndex]
                }
                
            }
        })();


const projectsArr = [
    new CreateProject("Lorem Ipsum",image1,0),
    new CreateProject("Lorem Ipsum",image1,1),
    new CreateProject("Lorem Ipsum",image1,1),
    new CreateProject("Lorem Ipsum",image1,0),
    new CreateProject("Lorem Ipsum",image1,0),
]

export default projectsArr;