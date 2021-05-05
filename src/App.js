/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./styles.css";
import { createUseStyles } from "react-jss";

export default function App() {
  const classes = useStyles();

  const data = [
    {
      school: {
        firstName: "Minako",
        lastName: "Okamoto",
        name: "Private Japanese Lesson",
        email: "private.nihongo.lessons@gmail.com",
        intro:
          '<p>PJL is an Online Japanese Language School offering private Japanese lessons to students since 2009. <i><b>We have developed a wide range of expertise in teaching Japanese, due to the diversity of our student base over the years.</i></b> We have taught university students, working professionals, company executives, expatriate families in Japan, young professionals seeking to work in Japan and Japan "lovers". </p> \n<p> We can cover all or focus on one aspect of your language learning, whether this is speaking, writing, reading or listening, and will provide you with the most relevant learning material for achieving your Japanese-learning goals.</p>\n<p> We also have a blog called <b><i>"Nihongo Day by Day"</b></i> you can follow related to language learning, written in both <a href=" http://nihongodaybyday.blogspot.hk/"> Japanese</a> and <a href=" http://nihognodaybydayenglish.blogspot.hk/"> English</a>.</p>\n<p>We strive to deliver a method of teaching that is engaging, dynamic and customised to the individual needs of our students.</p>\n<p>We look forward to enhancing your language-learning experience all the way from Japan!</p>',
        status: "ACTIVE",
        teachers: 2,
        verifyCode:
          "U580jzsf4IYtSDiA2Zb0zBqkzlmtUCF5xHQUNkg9cSUadIkEZlmdraXbszuU",
        createAt: 1511347373734,
        updateAt: 1619776656078,
        logo:
          "https://assets.fluentup.com/2017/11/22/ed6379f7-2ca2-4968-986f-bd99da10b113.png",
        timeZone: "Asia/Tokyo",
        token: "6077c7920e13de78b461ea4f",
        location: "null",
        skypeID: "okamoto9327",
        address: "2-22-26, Kuriharachuo, Zama, Kanagawa, Japan",
        stripe: "acct_1AzDTcEMT9h7iI0q",
        appFee: '{"structure":15,"single":15,"travel":20}',
        promotion: "[]",
        language: '[{"id":98,"name":"Japanese"}]',
        teachingSince: "2000-01-01T00:00:00+08:00",
        accreditation: "null",
        workingStart: "08:00",
        workingEnd: "22:00",
        workingWeekDays: "[4,5,7]",
        id: "5a1554ad0752e56fb8373764",
      },
      image: "https://assets.fluentup.com/2018/Aug/9n9lxe4twmw.png",
      title: "Japanese For Beginners",
      brief:
        "Do You Want to Learn Japanese? Get Started With PJL's Japanese Beginner Online Course.",
      description:
        'This Japanese For Beginners Course targets students at Beginner level (A1 or A2). Beginner level students will learn the key basics of the Japanese language and culture and are welcome to express areas they would like to focus on. Students can also tailor the online lessons to maximise the development of one particular learning skill.<p></p>\n<p><i><b>The Course includes live lessons usually taken on Skype.</p></i></b>\n<p><i><b>Our teachers have a high degree of experience in dealing with foreigners in Japan and can communicate effectively in English</i></b>, meaning they can fully understand your requirements.</p>\n<p>We can provide you with the right material to engage and enhance your learning process. Usually, we will provide you with material tailored to your requests. The Course structure will run based on your learning and feedback.</p>\n<p>More importantly, you will be able to direct your learning completely towards the areas you need to most whether that be:  \n<br>•Speaking\n<br>•Pronunciation\n<br>•Kanji\n<br>•Vocabulary\n<br>•Grammar\n<br>•Listening\n<br>•Writing</p>\n<p>The flexibility of the Course means we will personalise the curriculum as your Japanese improves.\n<p><b>Click "Free Trial" to easily try out a lesson with PJL!</b></p>',
      about:
        "<p>The aim of this <i>Japanese For Beginners Online Course</i> is to offer you a dedicated and specialised learning approach to achieving N5 and N4 levels in Japanese. We will also work together to understand your needs and areas of development and address these successfully.</p>\n<p><b>Course Outline:</b></p>\n<p>Our Courses match the JLPT requirements and will allow you to speak basic Japanese effectively in general areas of communication, as well as specific areas of interest.</p>\n<p>We suggest taking a free trial to discuss your needs first. We will then work to create the right Japanese Beginner Course for you!</p>\n<p> <b>Booking Terms and Conditions:</b>\n<br>• The Course lessons are originally priced in Japanese Yen or JPY\n<br>• Cancellation of your lesson or of any package of lessons,  is possible up to 48 hours prior to starting your first lesson\n<br>• Lessons can be re-scheduled up to at least 24 hours prior to its starting time\n<br>• The Course lessons are non-transferable\n<p><b>Expiration dates for packages:</b>\n<br>• For a package of 10 lessons is 1 month from date of purchase</p>",
      status: "ACTIVE",
      classConcurrence: 1,
      classSize: 1,
      classType: "Single Lesson",
      language: "Japanese",
      clanguage: '[{"id":98,"name":"Japanese"},{"id":1,"name":"English"}]',
      minLevel: 1,
      priceNum: 3800,
      priceUnit: "JPY",
      tags:
        '["Tailored Lessons","Flexible Schedule","Language Learning Assessment"]',
      timeSlot:
        '[{"startDate":1619755200000,"endDate":1653969600000,"lastDate":"45","unitLastDate":"week(s)","recurEvery":"","unitRecurEvery":"week(s)","listTimeSlot":[{"day":"Monday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"}]},{"day":"Tuesday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"}]},{"day":"Wednesday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"}]},{"day":"Thursday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"}]},{"day":"Friday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"}]}]}]',
      startDate: 1619755200000,
      endDate: 1653969600000,
      totalLessons: 1,
      totalWeeks: "45 minutes",
      promotions: '[{"numberPurchase":"","discount":""}]',
      trial: "N",
      priceType: "hour",
      address: "",
      location: "",
      accommodation: "Self Arranged",
      minPay: 0,
      enroll: 0,
      pay: 0,
      createAt: 1524639192443,
      updateAt: 1619776682400,
      photos: "[]",
      materials: "[]",
      id: "5ae025d80b3c457c76c77a9d",
      rate: 0,
    },
    {
      school: {
        firstName: "LAURE",
        lastName: "CHAMBON",
        name: "Atelier Francophone",
        email: "contact@atelierfrancophone.com",
        intro:
          "A new way to acquire the french language\nThis approach is the result of our 20 years of experience, research in linguistics, the CEFR (Common European Framwork of Reference For Languages) guidelines and the latest research in neurolinguistics. \nThe teachers of L'Atelier Francophone are all graduades of a FLE Master and all have a Neurolanguage Coaching® certification.\nCultural and linguistic immersion in French in Montpellier (South Of France) : Courses (one to one, small group, Skype), workshops, cultural and sports activities.\n",
        status: "ACTIVE",
        workingStart: "08:00",
        workingEnd: "20:00",
        workingWeekDays: "[1,2,3,4,5]",
        teachers: 4,
        verifyCode:
          "KvCIkyA2j6Is49uuLpAEiWNDmPnpOvhHoZnolCS2MsI2LV4WB4Q45vJoE2Zo",
        createAt: 1583315124384,
        updateAt: 1586524319792,
        accreditation:
          '[{"id":0,"text":"Neurolanguage Coaching® certification"}]',
        address: "Montpellier",
        facebookID: "https://www.facebook.com/latelierfrancophone/",
        instagramID: "https://www.intragram.com/atelierfrancophone/",
        language: '[{"id":59,"name":"French"}]',
        location: "null",
        logo: "https://assets.fluentup.com/2020/Mar/g3zcdcxpg1l.png",
        photos:
          '["https://assets.fluentup.com/2020/Mar/a1qhqsienhf.jpg","https://assets.fluentup.com/2020/Mar/yhe5tgnh2xj.jpg"]',
        skypeID: "contac@atelierfrancophone.com",
        teachingSince: "1998-09-01T00:00:00+02:00",
        timeZone: "Europe/Brussels",
        twitterID: "https://twitter.comfrançais_cours",
        appFee: '{"structure":15,"single":15,"travel":20}',
        promotion: "[]",
        stripe: "acct_1GPZB4BTFfUMMVKV",
        token: "6077c7920e13de78b461ea4f",
        id: "5e5f78b4e076bb22d9069112",
      },
      image: "https://assets.fluentup.com/2020/Mar/d7vt5o8vdpg.png",
      title: "french - visio",
      description:
        "We meet for an online session at your preferred pace:\nLessons are structured (documents are sent by e-mail)\n One-hour online lesson\n Feedback and suggestions for improvement\nA valuable and unique method for efficient learning!\nIncluded:\n- 1 hour individual session offered: diagnostic assessment, definition of objectives and list of actions to achieve them.\n- Free consolidation (online activities, paper, or interaction with the trainer by email / whatsapp, etc.).\n- Assessments and training certificate",
      status: "ACTIVE",
      classSize: 1,
      classType: "Single Lesson",
      language: "French",
      minLevel: 4,
      minPay: 10,
      priceNum: 45,
      priceUnit: "EUR",
      timeSlot:
        '[{"startDate":1619409600000,"endDate":1640923200000,"lastDate":"60","unitLastDate":"week(s)","recurEvery":"","unitRecurEvery":"week(s)","listTimeSlot":[{"day":"Monday","time":[{"from":"8:00 AM","to":"8:00 PM"}]},{"day":"Tuesday","time":[{"from":"8:00 AM","to":"8:00 PM"}]},{"day":"Wednesday","time":[{"from":"8:00 AM","to":"8:00 PM"}]},{"day":"Thursday","time":[{"from":"8:00 AM","to":"8:00 PM"}]},{"day":"Friday","time":[{"from":"8:00 AM","to":"8:00 PM"}]}]}]',
      startDate: 1619409600000,
      endDate: 1640923200000,
      totalLessons: 1,
      totalWeeks: "60 minutes",
      promotions:
        '[{"numberPurchase":"20","discount":"10"},{"numberPurchase":"40","discount":"20"}]',
      trial: "Y",
      about: "",
      priceType: "hour",
      classConcurrence: 0,
      address: "",
      location: "",
      accommodation: "Self Arranged",
      enroll: 0,
      pay: 0,
      createAt: 1584904117362,
      updateAt: 1619433317068,
      materials: "[]",
      photos: "[]",
      id: "5e77b7b5e076bb22d90693fb",
      rate: 0,
    },
    {
      school: {
        firstName: "Britta",
        lastName: "Dittkrist",
        name: "F+U Academy of Languages",
        email: "online.languages@fuu.de",
        intro:
          "F+U Academy of Languages has a Heidelberg and a Berlin branch. In both schools, we offer German and English intensive courses, as well as many other languages in customized individual and group courses. You name it – we teach it.\n\nF+U Academy of Languages is one of the largest language schools in Germany. Every year, over 10,000 language learners and exam candidates participate in our courses and examinations. Language learners from over 100 countries make your language course an intercultural experience.\n\nAs our student, you profit from almost 40 years of teaching experience. Thanks to modern technology, we are now able to provide you with our expertise in language teaching and exam preparation online. \n",
        status: "ACTIVE",
        teachers: 100,
        verifyCode:
          "55USeFObyTkOXcOzMOOTdSJHZqyJNGm9h6sbZubLhDchAmTQx6gqqvwvavul",
        createAt: 1552968127530,
        updateAt: 1620051401728,
        token: "608274170e13de78b461eba1",
        workingStart: "07:00",
        workingEnd: "22:00",
        location: "null",
        timeZone: "Europe/Berlin",
        address: "Heidelberg Germany",
        language: '[{"id":38,"name":"German"}]',
        photos:
          '["https://assets.fluentup.com/2019/Jul/iwpc2y7mnzs.jpg","https://assets.fluentup.com/2020/Jan/ls59yiuwz8h.jpg","https://assets.fluentup.com/2020/Jan/lm5h29h2w5r.jpg"]',
        teachingSince: "1980-01-01T00:00:00+01:00",
        logo: "https://assets.fluentup.com/2019/Apr/0sabjercc4n.png",
        facebookID: "https://de-de.facebook.com/AcademyofLanguagesHeidelberg/",
        twitterID: "",
        instagramID: "https://www.instagram.com/fuu_academy_of_languages/",
        appFee: '{"structure":15,"single":15,"travel":20}',
        promotion: "[]",
        stripe: "acct_1EQX7NDbDeoaLIRn",
        workingWeekDays: "[1,2,3,4,5,6]",
        youtube: "https://www.youtube.com/watch?v=MMqeTcUCxho",
        id: "5c9069bfd70a4b621e5cd037",
      },
      image: "https://assets.fluentup.com/2019/Apr/9ygr39read.png",
      title: "Tailored Online German Course",
      brief: "Fully Personalised German Course  Suited To Your Requirements.",
      description:
        "This Course can be tailored in length, focus, skill and material.\nOur School teachers are experienced and highly qualified, providing both German linguisitic and cultural learning.<p></p>\n<p>Our <b><i>Tailored Online German Course</b></i> can help you with preparation for: </p>\n• Specific TELC or Goethe material \n<br>• University programmes \n<br>• Phonetics \n<br>• Conversation fluency \n<br>• Specific professional aims \n<br>• Grammar basics \n<br>• Hobbies and German culture</p>",
      about:
        "<p><b>Course Outline:</p></b>\n<p>The Course will adapt as you progress in order to maximise your German learning. In addition, you will be able to direct your learning fully towards the area you need the most whether that be: </p>\n• Speaking \n<br>• Pronunciation \n<br>• Vocabulary \n<br>• Grammar \n<br>• Listening \n<br>• Writing</p>\n<p> <b>Booking Terms and Conditions:</b>\n<br>• Lessons can be re-scheduled up to at least 24 hours prior to its starting time\n<br>• The Course lessons are non-transferable",
      status: "ACTIVE",
      classConcurrence: 5,
      classSize: 1,
      classType: "Single Lesson",
      language: "German",
      clanguage: '[{"id":38,"name":"German"},{"id":1,"name":"English"}]',
      priceNum: 30,
      priceUnit: "EUR",
      tags:
        '["Tailored Lessons","Conversational","Exercises Included","University Prep","Flexible Schedule","Writing Included","Professional"]',
      timeSlot:
        '[{"startDate":1554177600000,"endDate":1680364800000,"lastDate":"45","unitLastDate":"week(s)","recurEvery":"","unitRecurEvery":"week(s)","listTimeSlot":[{"day":"Monday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"}]},{"day":"Tuesday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"}]},{"day":"Wednesday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"}]},{"day":"Thursday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"}]},{"day":"Friday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"}]}]}]',
      startDate: 1554177600000,
      endDate: 1680364800000,
      totalLessons: 1,
      totalWeeks: "45 minutes",
      promotions:
        '[{"numberPurchase":"10","discount":"5"},{"numberPurchase":"30","discount":"10"},{"numberPurchase":"100","discount":"25"}]',
      priceType: "hour",
      address: "",
      location: "",
      accommodation: "Self Arranged",
      minLevel: 0,
      minPay: 0,
      trial: "N",
      enroll: 1,
      pay: 0,
      createAt: 1554192455650,
      updateAt: 1579609191596,
      photos: '["https://assets.fluentup.com/2020/Jan/rmecme3nena.jpg"]',
      materials: "[]",
      youtube: "https://www.youtube.com/watch?v=MMqeTcUCxho",
      id: "5ca31847d041344de6d96d0c",
      rate: 0,
    },
    {
      school: {
        firstName: "Nathaniel",
        lastName: "Barrett",
        name: "Brown Cow English",
        email: "browncowenglish@gmail.com",
        intro:
          "<p>Welcome to Brown Cow English. We teach English on Skype to people all around the world. Our Director of Studies, Nathaniel Barrett, founded Brown Cow English back in 2010. </p>\n<p>Having taught English in British Council accredited schools since 2004, Nathaniel decided to branch into the world of online Skype English language lessons. His aim was to provide the same quality he had found in British Council accredited offline schools, with only CELTA or Trinity qualified teachers, but online.</p>\n<p>Brown Cow is a UK based online language school with UK standards. Our teachers are mostly British but we have American and Australian teachers too if you require it. <i>We pride ourselves in choosing the highest standards of quality and training for our Team. This is the most important thing for us, because it is what differentiates us from many online schools out there.</i></p>\n<p>We focus on your aims and reassess your targets each month in accordance with your improvements. We have a quick response time. Should you have questions or require assistance, our admin team will get back to you that same day - if not that same hour!</p",
        status: "ACTIVE",
        teachers: 16,
        verifyCode:
          "X5Fn0vOhXSrcb80sGCUd4QhPh6A3EzLF3PxjljKandlkIh2vGXPSbkysomjz",
        createAt: 1506950954332,
        updateAt: 1620109133559,
        logo:
          "https://assets.fluentup.com/2017/10/2/51382a5d-f850-43ab-84e4-8f370d49d027.png",
        location: '{"lat":51.4833,"lng":-0.1667}',
        facebookID: "https://www.facebook.com/EnglishBCE",
        twitterID: "https://twitter.com/BrownCowEnglish",
        address: "3rd Floor, 86-90 Paul Street, London, EC2A 4NE",
        youtube: "https://www.youtube.com/watch?v=zCcLYaT96BI",
        timeZone: "Europe/London",
        token: "606d6c392b3cec28ca22db86",
        appFee: '{"structure":15,"single":15,"travel":20}',
        promotion: "[]",
        instagramID: "https://www.instagram.com/bcebrowncowenglish/",
        stripe: "acct_1CL8NGGb6oYRAGac",
        language: '[{"id":1,"name":"English"}]',
        workingStart: "08:00",
        workingEnd: "22:00",
        teachingSince: "2010-01-01T00:00:00+08:00",
        accreditation: '[{"id":0,"text":"CELTA"}]',
        id: "59d23f2a8eed8f1215f64082",
      },
      image: "https://assets.fluentup.com/2018/Aug/tnduvnsnjlr.png",
      title: "General English Course for Beginners",
      brief:
        "A Course Completely Tailored to Your Needs. Maximum Flexibility in Course Development.",
      description:
        "This course is suitable for all English students who are complete beginners. The lessons are targeted towards students seeking a completely flexible course structure, tailoring lessons to suit the student’s requirements and areas of focus, to enhance specific areas of your learning.<p></p>\n<p>We have developed engaging and specific material for this approach to language learning. Students will usually work through course books given by us. However, to suit the flexibile structure of the Course, teachers include additional exercises and material of their own to keep the lessons interesting and fresh.</p>\n<p>Most importantly, we plan all lessons around your needs so that if you need:\n<br />• More grammar? \n<br />• More vocabulary? \n<br />• More writing? \n<br />• More speaking? \n<br />You decide!\n<p>The flexibility of the Course means we will adapt it as your English improves. You may choose to focus on just grammar for a month or you may just want to discuss different themes and work on your fluency and pronunciation.</p>",
      about:
        "<p><b>Content & Material</b></p>\n<p>We will prepare the syllabus and lesson structure according to your needs with course books in digital format (including audio) \n<p>During the lesson we also use tools like: \n<br />• Google Docs for real time corrections, \n<br />• YouTube (audio/visual), \n<br />• countless online exercises, \n<br />• detailed transcript of all corrections (through Skype chat box). \n<p><b>Resources </b></p>\nAll you need to learn English on Skype effectively, including:\n<br />• Homework is set for all students and lessons can be recorded if requested. \n<br />•A detailed transcript of all corrections given in the lesson (found in your Skype chat box). \n<br />•Course books in digital format - including audio. \n<br />•Homework is set for all students. \n<br />•Lessons can be recorded if requested.</p>\n<p>Cameras can be used in lessons (on average 50% of our students prefer with camera).</p>\n<br />- Students must contact teachers to cancel/reschedule lessons beforehand to avoid losing a lesson.",
      status: "ACTIVE",
      classConcurrence: 16,
      classSize: 1,
      classType: "Single Lesson",
      language: "English",
      priceNum: 16,
      priceUnit: "GBP",
      tags: '["Casual Learning","Tailored Lessons","Flexible Schedule"]',
      timeSlot:
        '[{"startDate":1510286400000,"endDate":1636588800000,"lastDate":"30","unitLastDate":"week(s)","recurEvery":"","unitRecurEvery":"week(s)","listTimeSlot":[{"day":"Monday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Tuesday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Wednesday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Thursday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Friday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Saturday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Sunday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]}]}]',
      startDate: 1510286400000,
      endDate: 1636588800000,
      totalLessons: 1,
      totalWeeks: "30 minutes",
      promotions:
        '[{"numberPurchase":"5","discount":"6.25"},{"numberPurchase":"10","discount":"12.5"}]',
      trial: "N",
      priceType: "hour",
      address: "",
      location: "",
      accommodation: "Self Arranged",
      minLevel: 1,
      enroll: 1,
      pay: 0,
      createAt: 1510312752388,
      updateAt: 1573443593071,
      photos: "[]",
      materials: "[]",
      id: "5a058b30aee826690ea5c242",
      rate: 5,
    },
    {
      school: {
        firstName: "Nathaniel",
        lastName: "Barrett",
        name: "Brown Cow English",
        email: "browncowenglish@gmail.com",
        intro:
          "<p>Welcome to Brown Cow English. We teach English on Skype to people all around the world. Our Director of Studies, Nathaniel Barrett, founded Brown Cow English back in 2010. </p>\n<p>Having taught English in British Council accredited schools since 2004, Nathaniel decided to branch into the world of online Skype English language lessons. His aim was to provide the same quality he had found in British Council accredited offline schools, with only CELTA or Trinity qualified teachers, but online.</p>\n<p>Brown Cow is a UK based online language school with UK standards. Our teachers are mostly British but we have American and Australian teachers too if you require it. <i>We pride ourselves in choosing the highest standards of quality and training for our Team. This is the most important thing for us, because it is what differentiates us from many online schools out there.</i></p>\n<p>We focus on your aims and reassess your targets each month in accordance with your improvements. We have a quick response time. Should you have questions or require assistance, our admin team will get back to you that same day - if not that same hour!</p",
        status: "ACTIVE",
        teachers: 16,
        verifyCode:
          "X5Fn0vOhXSrcb80sGCUd4QhPh6A3EzLF3PxjljKandlkIh2vGXPSbkysomjz",
        createAt: 1506950954332,
        updateAt: 1620109133559,
        logo:
          "https://assets.fluentup.com/2017/10/2/51382a5d-f850-43ab-84e4-8f370d49d027.png",
        location: '{"lat":51.4833,"lng":-0.1667}',
        facebookID: "https://www.facebook.com/EnglishBCE",
        twitterID: "https://twitter.com/BrownCowEnglish",
        address: "3rd Floor, 86-90 Paul Street, London, EC2A 4NE",
        youtube: "https://www.youtube.com/watch?v=zCcLYaT96BI",
        timeZone: "Europe/London",
        token: "606d6c392b3cec28ca22db86",
        appFee: '{"structure":15,"single":15,"travel":20}',
        promotion: "[]",
        instagramID: "https://www.instagram.com/bcebrowncowenglish/",
        stripe: "acct_1CL8NGGb6oYRAGac",
        language: '[{"id":1,"name":"English"}]',
        workingStart: "08:00",
        workingEnd: "22:00",
        teachingSince: "2010-01-01T00:00:00+08:00",
        accreditation: '[{"id":0,"text":"CELTA"}]',
        id: "59d23f2a8eed8f1215f64082",
      },
      image: "https://assets.fluentup.com/2018/Aug/se7cggv2xt.png",
      title: "Intermediate General English Course ",
      brief:
        "A Course Completely Tailored to Your Needs. Maximum Flexibility in Course Development.",
      description:
        "This course is suitable for all students holding intermediate levels B1 and B2. The lessons are targeted towards students seeking a completely flexible course structure, tailoring lessons to suit the student’s requirements and areas of focus, to enhance specific areas of your learning.<p></p>\n<p>We have developed engaging and specific material for this approach to language learning. Students will usually work through course books given by us. However, to suit the flexibile structure of the Course, teachers include additional exercises and material of their own to keep the lessons interesting and fresh.</p>\n<p>Most importantly, we plan all lessons around your needs so that if you need:\n<br />• More grammar? \n<br />• More vocabulary? \n<br />• More writing? \n<br />• More speaking? \n<br />You decide!\n<p>The flexibility of the Course means we will adapt it as your English develops. You may choose to focus on just grammar for a month or you may just want to discuss different themes and work on your fluency and pronunciation.</p>\n",
      about:
        "<p><b>Content & Material</b></p>\n<p>We will prepare the syllabus and lesson structure according to your needs with course books in digital format (including audio) \n<p>During the lesson we also use tools like: \n<br />• Google Docs for real time corrections, \n<br />• YouTube (audio/visual), \n<br />• countless online exercises, \n<br />• detailed transcript of all corrections (through Skype chat box). \n<p><b>Resources </b></p>\nAll you need to learn English on Skype effectively, including:\n<br />• Homework is set for all students and lessons can be recorded if requested. \n<br />•A detailed transcript of all corrections given in the lesson (found in your Skype chat box). \n<br />•Course books in digital format - including audio. \n<br />•Homework is set for all students. \n<br />•Lessons can be recorded if requested.</p>\n<p>Cameras can be used in lessons (on average 50% of our students prefer with camera).</p>",
      status: "ACTIVE",
      classConcurrence: 16,
      classSize: 1,
      classType: "Single Lesson",
      language: "English",
      minLevel: 2,
      priceNum: 12.75,
      priceUnit: "GBP",
      tags: '["Casual Learning","Tailored Lessons","Flexible Schedule"]',
      timeSlot:
        '[{"startDate":1510459200000,"endDate":1636588800000,"lastDate":"30","unitLastDate":"week(s)","recurEvery":"","unitRecurEvery":"week(s)","listTimeSlot":[{"day":"Monday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Tuesday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Wednesday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Thursday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Friday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Saturday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Sunday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]}]}]',
      startDate: 1510459200000,
      endDate: 1636588800000,
      totalLessons: 1,
      totalWeeks: "30 minutes",
      promotions:
        '[{"numberPurchase":"5","discount":"5"},{"numberPurchase":"10","discount":"12"}]',
      trial: "N",
      priceType: "hour",
      address: "",
      location: "",
      accommodation: "Self Arranged",
      enroll: 6,
      pay: 0,
      createAt: 1510481379242,
      updateAt: 1573443534939,
      photos: "[]",
      materials: "[]",
      clanguage: '[{"id":1,"name":"English"}]',
      id: "5a081de3aee826690ea5c246",
      rate: 5,
    },
    {
      school: {
        firstName: "Nathaniel",
        lastName: "Barrett",
        name: "Brown Cow English",
        email: "browncowenglish@gmail.com",
        intro:
          "<p>Welcome to Brown Cow English. We teach English on Skype to people all around the world. Our Director of Studies, Nathaniel Barrett, founded Brown Cow English back in 2010. </p>\n<p>Having taught English in British Council accredited schools since 2004, Nathaniel decided to branch into the world of online Skype English language lessons. His aim was to provide the same quality he had found in British Council accredited offline schools, with only CELTA or Trinity qualified teachers, but online.</p>\n<p>Brown Cow is a UK based online language school with UK standards. Our teachers are mostly British but we have American and Australian teachers too if you require it. <i>We pride ourselves in choosing the highest standards of quality and training for our Team. This is the most important thing for us, because it is what differentiates us from many online schools out there.</i></p>\n<p>We focus on your aims and reassess your targets each month in accordance with your improvements. We have a quick response time. Should you have questions or require assistance, our admin team will get back to you that same day - if not that same hour!</p",
        status: "ACTIVE",
        teachers: 16,
        verifyCode:
          "X5Fn0vOhXSrcb80sGCUd4QhPh6A3EzLF3PxjljKandlkIh2vGXPSbkysomjz",
        createAt: 1506950954332,
        updateAt: 1620109133559,
        logo:
          "https://assets.fluentup.com/2017/10/2/51382a5d-f850-43ab-84e4-8f370d49d027.png",
        location: '{"lat":51.4833,"lng":-0.1667}',
        facebookID: "https://www.facebook.com/EnglishBCE",
        twitterID: "https://twitter.com/BrownCowEnglish",
        address: "3rd Floor, 86-90 Paul Street, London, EC2A 4NE",
        youtube: "https://www.youtube.com/watch?v=zCcLYaT96BI",
        timeZone: "Europe/London",
        token: "606d6c392b3cec28ca22db86",
        appFee: '{"structure":15,"single":15,"travel":20}',
        promotion: "[]",
        instagramID: "https://www.instagram.com/bcebrowncowenglish/",
        stripe: "acct_1CL8NGGb6oYRAGac",
        language: '[{"id":1,"name":"English"}]',
        workingStart: "08:00",
        workingEnd: "22:00",
        teachingSince: "2010-01-01T00:00:00+08:00",
        accreditation: '[{"id":0,"text":"CELTA"}]',
        id: "59d23f2a8eed8f1215f64082",
      },
      image: "https://assets.fluentup.com/2018/Aug/1c6gxhxi7et.png",
      title: "Business English Course",
      brief:
        "Communicate in English Effectively and Reach Your Career and Business Goals.",
      description:
        "This Online Course is suitable for intermediate level students holding levels B1 and B2. It is targeted towards working professionals requiring intermediate English communication skills to perform at best on the job. <p></p>\n<p>Students choose to study Business English over Skype with Brown Cow for a variety of reasons such as:\n<br />• Presentation preparation. \n<br />• Email checking. \n<br />• Business writing skills. \n<br />• General Business English skills \n<p>If a student wants to focus on General Business English skills, we usually use a course book. If not, tailor-made tasks and activities can be arranged for the student at request.</p>\n<p>We will help you improve your:\n<br />• Fluency - speaking confidently.\n<br />• Comprehension - understanding easily.\n<br />• Grammatical accuracy - all grammar is covered depending on your needs.\n<br />• Lexical bank - expanding your vocabulary.\n<br />• Natural English - phrasal verbs, idioms and slang.\n<br />•Pronunciation - speaking clearly.",
      about:
        "<p><b>Content and Material:</b></p>\n<p>We will prepare the syllabus and lesson structure according to your needs with course books in digital format (including audio).</p>\n<p>During the lesson we also use tools like:\n<br />• Google Docs for real time corrections,\n<br />• YouTube (audio/visual),\n<br />• countless online exercises,\n<br />• detailed transcript of all corrections (through Skype chat box).\n<br />• Homework is set for all students and lessons can be recorded if requested.\n<p><b>Resources </b></p>\nAll you need to learn English on Skype effectively, including:\n<br />•A detailed transcript of all corrections given in the lesson (found in your Skype chat box).\n<br />•Course books in digital format - including audio.\n<br />•Homework is set for all students.\n<br />•Lessons can be recorded if requested.</p>\n<p>Cameras can be used in lessons (on average 50% of our students prefer with camera).</p>",
      status: "ACTIVE",
      classConcurrence: 16,
      classSize: 1,
      classType: "Single Lesson",
      language: "English",
      minLevel: 2,
      priceNum: 12.75,
      priceUnit: "GBP",
      tags:
        '["Business","Tailored Lessons","Oral Practice","Writing Focused","Presentation Skills","Networking Skills","Conversational Skills","Vocabulary Focused"]',
      timeSlot:
        '[{"startDate":1510459200000,"endDate":1636588800000,"lastDate":"30","unitLastDate":"week(s)","recurEvery":"","unitRecurEvery":"week(s)","listTimeSlot":[{"day":"Monday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Tuesday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Wednesday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Thursday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Friday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Saturday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Sunday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]}]}]',
      startDate: 1510459200000,
      endDate: 1636588800000,
      totalLessons: 1,
      totalWeeks: "30 minutes",
      promotions:
        '[{"numberPurchase":"5","discount":"5"},{"numberPurchase":"10","discount":"12"}]',
      trial: "N",
      priceType: "hour",
      address: "",
      location: "",
      accommodation: "Self Arranged",
      enroll: 5,
      pay: 0,
      createAt: 1510462682411,
      updateAt: 1573443478273,
      photos: "[]",
      materials: "[]",
      clanguage: '[{"id":1,"name":"English"}]',
      id: "5a07d4daaee826690ea5c245",
      rate: 4,
    },
    {
      school: {
        firstName: "Nathaniel",
        lastName: "Barrett",
        name: "Brown Cow English",
        email: "browncowenglish@gmail.com",
        intro:
          "<p>Welcome to Brown Cow English. We teach English on Skype to people all around the world. Our Director of Studies, Nathaniel Barrett, founded Brown Cow English back in 2010. </p>\n<p>Having taught English in British Council accredited schools since 2004, Nathaniel decided to branch into the world of online Skype English language lessons. His aim was to provide the same quality he had found in British Council accredited offline schools, with only CELTA or Trinity qualified teachers, but online.</p>\n<p>Brown Cow is a UK based online language school with UK standards. Our teachers are mostly British but we have American and Australian teachers too if you require it. <i>We pride ourselves in choosing the highest standards of quality and training for our Team. This is the most important thing for us, because it is what differentiates us from many online schools out there.</i></p>\n<p>We focus on your aims and reassess your targets each month in accordance with your improvements. We have a quick response time. Should you have questions or require assistance, our admin team will get back to you that same day - if not that same hour!</p",
        status: "ACTIVE",
        teachers: 16,
        verifyCode:
          "X5Fn0vOhXSrcb80sGCUd4QhPh6A3EzLF3PxjljKandlkIh2vGXPSbkysomjz",
        createAt: 1506950954332,
        updateAt: 1620109133559,
        logo:
          "https://assets.fluentup.com/2017/10/2/51382a5d-f850-43ab-84e4-8f370d49d027.png",
        location: '{"lat":51.4833,"lng":-0.1667}',
        facebookID: "https://www.facebook.com/EnglishBCE",
        twitterID: "https://twitter.com/BrownCowEnglish",
        address: "3rd Floor, 86-90 Paul Street, London, EC2A 4NE",
        youtube: "https://www.youtube.com/watch?v=zCcLYaT96BI",
        timeZone: "Europe/London",
        token: "606d6c392b3cec28ca22db86",
        appFee: '{"structure":15,"single":15,"travel":20}',
        promotion: "[]",
        instagramID: "https://www.instagram.com/bcebrowncowenglish/",
        stripe: "acct_1CL8NGGb6oYRAGac",
        language: '[{"id":1,"name":"English"}]',
        workingStart: "08:00",
        workingEnd: "22:00",
        teachingSince: "2010-01-01T00:00:00+08:00",
        accreditation: '[{"id":0,"text":"CELTA"}]',
        id: "59d23f2a8eed8f1215f64082",
      },
      image:
        "https://assets.fluentup.com/2017/11/12/88e881e6-2a13-42e2-b2fe-33b3ab8422a2.png",
      title: "Advanced Business English Course",
      brief:
        "Communicate in English as an Effective Leader and Reach Your Career and Business Goals.",
      description:
        "This Course is suitable for intermediate level students holding levels C1 and C2. It is targeted towards working professionals requiring intermediate English communication skills to perform at best on the job. <p></p>\n<p>Students choose to study Business English over Skype with Brown Cow for a variety of reasons such as:\n<br />• Presentation preparation. \n<br />• Email checking. \n<br />• Business writing skills. \n<br />• General Business English skills \n<p>If a student wants to focus on General Business English skills, we usually use a course book. If not, tailor-made tasks and activities can be arranged for the student at request.</p>\n<p>We will help you improve your:\n<br />• Fluency - speaking confidently.\n<br />• Comprehension - understanding easily.\n<br />• Grammatical accuracy - all grammar is covered depending on your needs.\n<br />• Lexical bank - expanding your vocabulary.\n<br />• Natural English - phrasal verbs, idioms and slang.\n<br />•Pronunciation - speaking clearly.",
      about:
        "<p><b>Content and Material:</b></p>\n<p>We will prepare the syllabus and lesson structure according to your needs with course books in digital format (including audio).</p>\n<p>During the lesson we also use tools like:\n<br />• Google Docs for real time corrections,\n<br />• YouTube (audio/visual),\n<br />• countless online exercises,\n<br />• detailed transcript of all corrections (through Skype chat box).\n<br />• Homework is set for all students and lessons can be recorded if requested.\n<p><b>Resources </b></p>\nAll you need to learn English on Skype effectively, including:\n<br />•A detailed transcript of all corrections given in the lesson (found in your Skype chat box).\n<br />•Course books in digital format - including audio.\n<br />•Homework is set for all students.\n<br />•Lessons can be recorded if requested.</p>\n<p>Cameras can be used in lessons (on average 50% of our students prefer with camera).</p>",
      status: "ACTIVE",
      classConcurrence: 5,
      classSize: 1,
      classType: "Single Lesson",
      language: "English",
      minLevel: 5,
      priceNum: 12.75,
      priceUnit: "GBP",
      tags: '["Business","Tailored Lessons","Oral Practice"]',
      timeSlot:
        '[{"startDate":1510459200000,"endDate":1636588800000,"lastDate":"30","unitLastDate":"week(s)","recurEvery":"","unitRecurEvery":"week(s)","listTimeSlot":[{"day":"Monday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Tuesday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Wednesday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Thursday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Friday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Saturday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]},{"day":"Sunday","time":[{"from":"6:00 AM","to":"7:00 AM"},{"from":"7:00 AM","to":"8:00 AM"},{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"},{"from":"9:00 PM","to":"10:00 PM"},{"from":"10:00 PM","to":"11:00 PM"}]}]}]',
      startDate: 1510459200000,
      endDate: 1636588800000,
      totalLessons: 1,
      totalWeeks: "30 minutes",
      promotions:
        '[{"numberPurchase":"5","discount":"5"},{"numberPurchase":"10","discount":"12"}]',
      trial: "N",
      priceType: "hour",
      address: "",
      location: "",
      accommodation: "Self Arranged",
      enroll: 0,
      pay: 0,
      createAt: 1510460243097,
      updateAt: 1573443460690,
      photos: "[]",
      materials: "[]",
      clanguage: '[{"id":1,"name":"English"}]',
      id: "5a07cb53aee826690ea5c243",
      rate: 0,
    },
    {
      school: {
        firstName: "Sandrine",
        lastName: "Nocco",
        name: "Institut Européen de Français",
        email: "sandrine.nocco@institut-europeen.com",
        intro:
          "<b><i>The Institut Européen de Français </b></i>is a French school in Montpellier that aims to offer the highest standards of teaching to its students through a personalized attention, professionalism, quality, on a friendly and kind atmosphere. Because each person is unique, we work to provide each one with unique experiences in the south of France that people can remember forever.<p></p>\n<p>Our School is recognized by the French Foreign language quality label, Government departments of Higher Education and Research, Culture and Communication and the Ministry of Foreign Affairs, as well as other recognition boards in France and abroad. <b><i>Our institute is one of the top French schools in France.</b></i></p>\n<p>The Institut Européen de Français holds several accreditations and certifications, granted by important institutions that attest to the quality of our French courses. We also establish partnerships with other companies and organizations in order to improve the overall experience of the students that learn French in Montpellier with us.</p>\n<p>The School hosts over a diverse group of over 1300 students a year from  40 different nationalities.  We provide a  minimum of 5 levels all year long taught by a Team of 15 experienced, native and highly qualified teachers. Our schools boasts 13 completely equipped, spacious and bright classrooms in a unique and beautiful building.</p>\n\n\n",
        status: "LOCK",
        teachers: 15,
        verifyCode:
          "79IplynSgmNxlw04T5T7mpQ1qinqA4AaWI0KiJfOznNwXc8UHTh8sCewuR8G",
        createAt: 1536131495412,
        updateAt: 1553142088669,
        token: "5d8b6e73ae56c263282f96c0",
        logo: "https://assets.fluentup.com/2018/Sep/b0h52d2qn1h.png",
        youtube: "https://youtu.be/zKli6fF0wrg",
        photos:
          '["https://assets.fluentup.com/2018/Sep/32popccttvy.jpg","https://assets.fluentup.com/2018/Sep/fmy276g0uf5.jpg","https://assets.fluentup.com/2018/Sep/q3hf3yxh3cs.jpg","https://assets.fluentup.com/2018/Sep/8cwodq7l4j9.jpg","https://assets.fluentup.com/2018/Sep/zrjdiggpos.jpg","https://assets.fluentup.com/2018/Sep/5k1n0zsmlp.jpg","https://assets.fluentup.com/2018/Sep/pot8ttnm8b.jpg","https://assets.fluentup.com/2018/Sep/8vfjwjpqrhx.jpg"]',
        location: "null",
        timeZone: "Europe/Paris",
        address: "23, rue Saint Guilhem - 34000 Montpellier - France",
        stripe: "acct_1DBhy2GvT7x7OqO8",
        appFee: '{"structure":15,"single":15,"travel":20}',
        promotion: "[]",
        language: '[{"id":59,"name":"French"}]',
        accreditation:
          '[{"id":0,"text":"Qualité Français Langue Étrangère"},{"id":1,"text":"Fédération Internationale Des Professeurs De Français"},{"id":2,"text":"Centre de Langue Française"},{"id":3,"text":"Groupement FLE"},{"id":4,"text":"Campus France"},{"id":5,"text":"Bildungsurlaub"},{"id":6,"text":"CSN"},{"id":7,"text":"TANDEM International"}]',
        teachingSince: "2001-01-01T00:00:00+08:00",
        workingStart: "08:00",
        workingEnd: "22:00",
        id: "5b8f81a7c41d934efc4a0385",
      },
      image: "https://assets.fluentup.com/2018/Sep/j10cdp8zrk.png",
      title: "General French For Beginners",
      brief: "Start Your French Journey With Confidence.",
      description:
        "If you are learning the French language at A1 or A2 level and looking to follow a structured learning path, then this is the course for you. It well-suited to first-time students looking to start picking up the general basics of the French language.<p></p>\n<p> We will be using innovative teaching methods including the <i><b>Communicative Method</i></b>,  role-play and task-based learning based on the CEFR (Common European Framework of Reference for Languages).</p>\n<p> Throughout the course, you will be developing various skills including oral and written understanding, as well as oral and written expression.</p>\n<p> Please take a <b><i>20-minute free trial lesson</b></i> to understand better our course, get to know the teacher and the school as well as explain their goals and specific needs</p>",
      status: "ACTIVE",
      classConcurrence: 10,
      classSize: 1,
      classType: "Single Lesson",
      language: "French",
      clanguage: '[{"id":59,"name":"French"},{"id":1,"name":"English"}]',
      minLevel: 2,
      priceNum: 45,
      priceUnit: "EUR",
      tags:
        '["General Learning","Oral Practice","Conversational Skills","Vocabulary Focused","Travel Basics","Kids Learning","Exercises Included","Exam Prep"]',
      timeSlot:
        '[{"startDate":1536206400000,"endDate":1632996000000,"lastDate":"60","unitLastDate":"week(s)","recurEvery":"","unitRecurEvery":"week(s)","listTimeSlot":[{"day":"Monday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"}]},{"day":"Tuesday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"}]},{"day":"Wednesday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"}]},{"day":"Thursday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"}]},{"day":"Friday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"}]},{"day":"Saturday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"}]},{"day":"Sunday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"}]}]}]',
      startDate: 1536206400000,
      endDate: 1632996000000,
      totalLessons: 1,
      totalWeeks: "60 minutes",
      promotions:
        '[{"numberPurchase":"10","discount":"10"},{"numberPurchase":"20","discount":"20"}]',
      trial: "Y",
      about:
        "<p><b>Course Objective:</b> \n<p>The aim of the course is to offer you a dedicated and specialised teaching approach to help you achieve levels A1 & A2 the earliest possible by maximising your full learning potential.</p>\n<p><b>Course Outline:</b></p>\n<p>As you progress throughout the course, your use of French will improve to a level that allows use in everyday situations. Topics covered will include studies, work, travel, personal pleasure using a variety of sources including newspapers, songs, photos, audio, video.</p>\n<p> <b>Booking Terms and Conditions:</b>\n<br>• The Course lessons are originally priced in EUR or Euro\n<br>• Cancellation of your lesson or of any package of lessons,  is possible up to 48 hours prior to starting your first lesson",
      priceType: "hour",
      address: "",
      location: "",
      accommodation: "Self Arranged",
      minPay: 0,
      enroll: 1,
      pay: 0,
      createAt: 1536204217129,
      updateAt: 1569862962361,
      photos: "[]",
      materials: "[]",
      id: "5b909db96cac3e4dd37e7af6",
      rate: 5,
    },
    {
      school: {
        firstName: "Britta",
        lastName: "Dittkrist",
        name: "F+U Academy of Languages",
        email: "online.languages@fuu.de",
        intro:
          "F+U Academy of Languages has a Heidelberg and a Berlin branch. In both schools, we offer German and English intensive courses, as well as many other languages in customized individual and group courses. You name it – we teach it.\n\nF+U Academy of Languages is one of the largest language schools in Germany. Every year, over 10,000 language learners and exam candidates participate in our courses and examinations. Language learners from over 100 countries make your language course an intercultural experience.\n\nAs our student, you profit from almost 40 years of teaching experience. Thanks to modern technology, we are now able to provide you with our expertise in language teaching and exam preparation online. \n",
        status: "ACTIVE",
        teachers: 100,
        verifyCode:
          "55USeFObyTkOXcOzMOOTdSJHZqyJNGm9h6sbZubLhDchAmTQx6gqqvwvavul",
        createAt: 1552968127530,
        updateAt: 1620051401728,
        token: "608274170e13de78b461eba1",
        workingStart: "07:00",
        workingEnd: "22:00",
        location: "null",
        timeZone: "Europe/Berlin",
        address: "Heidelberg Germany",
        language: '[{"id":38,"name":"German"}]',
        photos:
          '["https://assets.fluentup.com/2019/Jul/iwpc2y7mnzs.jpg","https://assets.fluentup.com/2020/Jan/ls59yiuwz8h.jpg","https://assets.fluentup.com/2020/Jan/lm5h29h2w5r.jpg"]',
        teachingSince: "1980-01-01T00:00:00+01:00",
        logo: "https://assets.fluentup.com/2019/Apr/0sabjercc4n.png",
        facebookID: "https://de-de.facebook.com/AcademyofLanguagesHeidelberg/",
        twitterID: "",
        instagramID: "https://www.instagram.com/fuu_academy_of_languages/",
        appFee: '{"structure":15,"single":15,"travel":20}',
        promotion: "[]",
        stripe: "acct_1EQX7NDbDeoaLIRn",
        workingWeekDays: "[1,2,3,4,5,6]",
        youtube: "https://www.youtube.com/watch?v=MMqeTcUCxho",
        id: "5c9069bfd70a4b621e5cd037",
      },
      image: "https://assets.fluentup.com/2019/Apr/svavcse9j4.png",
      title: "Business German Online Course",
      brief:
        "Master German for Business. Learn the right language and etiquette to make your business meetings and relationships a success!",
      description:
        "This Course is is targeted towards professionals and entrepreneurs planning to work or do business in German-speaking countries. </p>\n<p>It is primarily indicated to expand your knowledge of German usage during formal meetings and settings. </p>\n<p><i>Our teachers have a high degree of experience in dealing with teaching professionals and German related to specific sectors of the economy. </p></i>\n<p>We will focus on speaking and listening techniques, pronunciation and focus on developing your vocabulary, body language and rapport skills in order to sustain polite and appropriate business language and behaviour required to make the best impression.</p>\n<p>Practical examples of your learning include:\n<br>• Understanding the appropriate etiquette and body language for German business meetings\n<br>• Making correct formal introductions of yourself and your company\n<br>• Giving presentations or discussing business concepts in German\n<br>• Writing and checking emails in German\n<br>• How to network and communicate effectively in a professional context</p>",
      about:
        "<p><b>Course Objective: </b>\n<p>You will express yourself confidently in German while developing more profound relationships in a business context and working environment.</p>\n<p><b>Course Outline</p></b>\n<p>We suggest a course of at least 10 lessons to achieve the following: \n<br>• Securely expand your range of professional vocabulary \n<br>• Become spontaneous in engaging conversations and formal/informal business situations \n<br>• Approach negotiations more diplomatically </p>\n<p> <b>Booking Terms and Conditions:</b>\n<br>• Lessons can be re-scheduled up to at least 24 hours prior to its starting time\n<br>• The Course lessons are non-transferable",
      status: "ACTIVE",
      classConcurrence: 5,
      classSize: 1,
      classType: "Single Lesson",
      language: "German",
      clanguage: '[{"id":38,"name":"German"},{"id":1,"name":"English"}]',
      priceNum: 32,
      priceUnit: "EUR",
      tags:
        '["Business","Flexible Schedule","Writing Included","Meetings","Conversational","Professional","Presentation Skills","Career"]',
      timeSlot:
        '[{"startDate":1554177600000,"endDate":1648828800000,"lastDate":"45","unitLastDate":"week(s)","recurEvery":"","unitRecurEvery":"week(s)","listTimeSlot":[{"day":"Monday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"}]},{"day":"Tuesday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"}]},{"day":"Wednesday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"}]},{"day":"Thursday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"}]},{"day":"Friday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"}]},{"day":"Saturday","time":[{"from":"8:00 AM","to":"9:00 AM"},{"from":"9:00 AM","to":"10:00 AM"},{"from":"10:00 AM","to":"11:00 AM"},{"from":"11:00 AM","to":"12:00 AM"},{"from":"12:00 AM","to":"1:00 PM"},{"from":"1:00 PM","to":"2:00 PM"},{"from":"2:00 PM","to":"3:00 PM"},{"from":"3:00 PM","to":"4:00 PM"},{"from":"4:00 PM","to":"5:00 PM"},{"from":"5:00 PM","to":"6:00 PM"},{"from":"6:00 PM","to":"7:00 PM"},{"from":"7:00 PM","to":"8:00 PM"},{"from":"8:00 PM","to":"9:00 PM"}]}]}]',
      startDate: 1554177600000,
      endDate: 1648828800000,
      totalLessons: 1,
      totalWeeks: "45 minutes",
      promotions:
        '[{"numberPurchase":"2","discount":"5"},{"numberPurchase":"30","discount":"10"},{"numberPurchase":"100","discount":"25"}]',
      priceType: "hour",
      address: "",
      location: "",
      accommodation: "Self Arranged",
      minLevel: 0,
      minPay: 0,
      trial: "N",
      enroll: 0,
      pay: 0,
      createAt: 1554193551019,
      updateAt: 1561724385352,
      photos: "[]",
      materials: "[]",
      youtube: "https://www.youtube.com/watch?v=MMqeTcUCxho",
      id: "5ca31c8fd041344de6d96d0d",
      rate: 0,
    },
  ];

  const showRate = (value) => {
    let result = [];
    if (value == 0) {
      result = <span id="span-price-not">Not enough reviews yet</span>;
    } else {
      for (let i = 0; i < value; i++) {
        result.push(<i className="fas fa-star" id="icon-star"></i>);
      }
      for (let j = 0; j < 5 - value; j++) {
        result.push(<i className="fas fa-star" id="icon-star-none"></i>);
      }
    }
    return result;
  };

  const showPrice = (priceNum, priceUnit, discountProduct) => {
    let sum = 0;
    if (discountProduct > 0) {
      if (priceUnit === "JPY") {
        sum = priceNum * 206 * (1 - discountProduct / 100);
      }
      if (priceUnit === "EUR") {
        sum = priceNum * 27600 * (1 - discountProduct / 100);
      }
      if (priceUnit === "GBP") {
        sum = priceNum * 32000 * (1 - discountProduct / 100);
      }
    } else {
      if (priceUnit === "JPY") {
        sum = priceNum * 206;
      }
      if (priceUnit === "EUR") {
        sum = priceNum * 27.6;
      }
      if (priceUnit === "GBP") {
        sum = priceNum * 32000;
      }
    }
    const numberToString = String(sum);
    const format = numberToString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return format;
  };

  return (
    <div className="container">
      <div className="grid-container">
        {data.map((item, index) => {
          console.log(item.minLevel);
          const timeWeeks = item.totalWeeks.slice(0, 2);
          const discountAll = item.promotions.slice(3, -3);
          const discount = discountAll.split('","');
          const discountFinal = discount.slice(-1);
          const test111 = discountFinal.join();
          const discountProduct = parseInt(
            Math.ceil(test111.replace('discount":"', ""))
          );
          if (typeof item.tags === "string") {
            var test1 = item.tags.slice(3, -3);
            var test2 = test1.split('","');
          }
          return (
            <div className="grid-item" key={index}>
              {discountProduct ? (
                <div className="diplay-row">
                  <div className="course-row-left"></div>
                  <div className="course-discount">
                    UP TO {discountProduct}% OFF
                  </div>
                </div>
              ) : null}
              <img src={item.image} alt="" id="img-content" />
              <div className="title">
                <h3 id="h3-title">{item.title}</h3>
                <span id="span-title">{item.school.name}</span>
              </div>
              <div className="display-row category">
                {test2
                  ? test2.map((value, index) => {
                      return (
                        <span key={index} id="span-category">
                          {value}
                        </span>
                      );
                    })
                  : null}
              </div>
              <div className="price">
                <div className="price-left">
                  <span id="span-price">average rating</span>
                  {showRate(item.rate)}
                </div>
                <div className="price-right">
                  <p id="p-price-from">from</p>
                  <p id="p-price">
                    {showPrice(item.priceNum, item.priceUnit, discountProduct)}
                    <span id="p-price">₫</span>
                  </p>
                </div>
              </div>
              <div className="bottom-card">
                <span id="span-bottom">
                  <i className="far fa-clock" id="icon-bottom"></i>
                  {timeWeeks} Mins/lesson
                </span>
                {item.minLevel === 0 && (
                  <span id="span-bottom">
                    <i className="far fa-lightbulb" id="icon-bottom"></i>
                    all levels
                  </span>
                )}
                {item.minLevel > 0 && item.minLevel < 5 && (
                  <span id="span-bottom">
                    <i className="far fa-lightbulb" id="icon-bottom"></i>
                    beginners
                  </span>
                )}
                {item.minLevel >= 5 && (
                  <span id="span-bottom">
                    <i className="far fa-lightbulb" id="icon-bottom"></i>
                    advanced
                  </span>
                )}
                {/* <span id="span-bottom">
                  <i className="far fa-lightbulb" id="icon-bottom"></i>
                  beginners
                </span> */}
                <span id="span-bottom">
                  <i className="far fa-smile" id="icon-bottom"></i>1 on 1
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

//style riêng của mỗi màn hình
const useStyles = createUseStyles({
  Fluentup: {
    display: "flex",
    flex: 1,
  },
});
