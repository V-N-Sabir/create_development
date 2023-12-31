import React from "react"
import './home.style.css'       
//import MainSkeleton from "../components/SkeletonSlayd"
//import LoadingContext from "../components/loadingContext/loadingContext"
//import MainSkeleton from "../components/SkeletonSlayd"
//const  Img1 = React.lazy( () => import(/* webpackChunkName: "Img1" */ "../components/Img1/Img1"))


const Home = React.memo(() => {

   /* const [state, setUseState] = React.useState(0)

    React.useEffect(() => {
        if (window.innerWidth > 0) {
            setUseState(window.innerWidth)
        }

    }, [])
*/

    return (  
        <div className="page page-enter-active">
            <h1 className="main_title">Разработка сайтов на React открывает бесконечные возможности</h1>

      {/*<LoadingContext />*/}
        {/* <MainSkeleton />*/}
            <div className="main_text">
            <ul className="list_text">
                <li className="main_title">Забудьте о границах с CMS</li>
                <li className="main_children_text">Когда дело доходит до создания веб-сайтов, React выходит за рамки того, 
                что могут предложить традиционные CMS. Наша команда специалистов по 
                разработке на React гордится созданием сайтов, которые отражают вашу 
                уникальную миссию и ценности, а не ограничиваются шаблонами CMS. Вот 
                некоторые преимущества разработки на React</li>
                <li className="main_title">Безопасность</li>
                <li className="main_children_text">Мы уделяем большое внимание безопасности сайтов, созданных на React, 
                чтобы защитить вашу информацию и данные клиентов.</li>
                <li className="main_title">SEO-оптимизация</li>
                <li className="main_children_text">React позволяет создавать сайты, легко индексируемые поисковыми 
                системами, благодаря серверному рендерингу и хорошей производительности.</li>
                <li className="main_title">Легкость обновления</li>
                <li className="main_children_text">При разработке на React обновления и добавление новых функций 
                становятся более простыми и менее рискованными.
                Не важно, какой тип веб-проекта вы хотите создать, 
                React позволяет нам достичь вашей цели с учетом всех ваших 
                требований. Мы работаем с вами, чтобы разработать сайт, 
                который не только соответствует вашим ожиданиям, но и превосходит их.</li>

 
                <li className="main_title">Индивидуальный дизайн</li>
                <li className="main_children_text">React позволяет создавать уникальные и индивидуальные дизайны, 
                которые соответствуют вашему бренду и визуальным ожиданиям.</li>

                <li className="main_title">Расширяемость и гибкость</li>
                <li className="main_children_text">React предоставляет множество инструментов и библиотек для 
                расширения функциональности вашего сайта и адаптации к различным потребностям.</li>
               
                <li className="main_title">Высокая производительность</li>
                <li className="main_children_text">Веб-сайты, созданные на React, обычно обладают выдающейся 
                производительностью благодаря виртуальной DOM и оптимизации.</li>

                
                  
                <li className="main_title">Интеграция с другими технологиями</li>
                <li className="main_children_text">React легко интегрируется с различными инструментами и API, 
                что делает его идеальным выбором для разнообразных веб-проектов.</li>
            </ul>
              
        
            </div>
            {/*<BricksIndex />*/}
         </div>
       
     
        )
    })



export default Home