import React from 'react'
import Layout from '../components/layout'
import Container from '../components/Container'
import Menu from  '../components/subPageMenu'

const AboutPage = ({ data }) => (
  <Layout>
    <Menu />
        <Container>
            <h1 style={{
                marginTop:100,
                textAlign:'center',
                }}
            >
                About
            </h1>
            
            <p>
                My name is Joe Bartylla. I started bow hunting with a recurve for whitetails in 1978. I harvested my first deer with a Bear Whitetail Hunter compound a few years later. Since than I have consistently harvested deer every year during Wisconsin's archery season. I have kept a hunting and habitat improvement journal for many years. If you are currently not keeping a journal in these areas, I would highly recommend starting.
            </p>
            <p>
                In the 90s, my brother Steve and I made several videos on habitat improvements and hunting techniques. Back then when you talked about food plots most people had no idea what you were talking. Many people did not understand why we went through that much work for our deer herd. I have owned 40 acres in Northern Wisconsin since 1996. In the early years I was trying to improve the habitat without a complete plan. I had some success and failures when I started. I still have some failures because I am willing to test out some new techniques on my own property. I refuse to recommend techniques to my clients that I have not tested and had positive results. I conduct habitat workshops for QDMA, teach habitat improvements/hunting techniques seminars, and instruct habitat improvement classes to adults through technical college. Even if you choose not to use my services, you will be better off if you develop a solid plan before you make your first change.
            </p>
            <p>
                I hunt private property and public land each year. I have made habitat improvements on some of the land I hunt, although, I am not able to do any improvements on all of them. The properties that have not been manipulated are much harder to hunt and my success rate on these lands is not as high. To me this shows the power of manipulating the habitat to improve the carrying capacity and improve the hunting. My plans focus on keeping the pressure low and making deer feel safe so they are willing to move during hunting hours. Even during the high pressure of the Wisconsin's rifle season, I still have deer in my food plots during the day, including mature bucks. They only do this if they feel safe. Many experts say that the first time in on your stand is the best time to kill a mature buck. This may be true, but if the property is set up wisely, the second or tenth time can be just as effective as the first sit.
            </p>
            <p>
                There are many reasons why you should consider hiring me as your habitat consultant. First, the years of experience that I have can help ensure that your habitat improvements are put in the right location to not only make your habitat better, but also improve your hunting. It can be a waste of money when improvements are made without a well thought out plan and can actually make your hunting experiences worse. I test new seed varieties each year so you don't have to. I have a masters degree, and have taught science, wildlife management, and habitat improvement since 1991. I use the scientific method in my research when testing seed varieties. When I was in college, pursuing a degree in biology and earth science, I worked at a seed company called Jacques Seeds. I continued to work there after I graduated where I worked as a plant researcher and breeder, helping to develop new varieties of corn, alfalfa and soybeans. These experiences helped me increase my knowledge on new plant varieties that we were creating and as well as testing new varieties against well proven varieties using the scientific method.
            </p>
            <p>
                I feel that I have built relationships with my clients and consider them to be more like friends than clients. I can provide references if you would like. I am more than happy to talk to you about my services. You can call me at (715-222-3013) or email me at whitetailhabitatconsulting@gmail.com and I will get back you as soon as I can. I understand that many landowners want to improve their habitat without the help of a consultant because there is a pride in doing the work on your own, but I want you to realize that it is, most likely, going to take you more time and cost you more money than if you choose a good habitat manager and hunting consultant to help you reach your goals. I can evaluate and discuss the pros and cons of your plan with you or build you a complete plan. Thanks for considering my services, and I look forward to hearing from you.
            </p>
        </Container>

  </Layout>
)


export default AboutPage
