export default[
  {
    type: "malaria",
    more: "Malaria is a serious and sometimes fatal disease caused by a parasite that commonly infects a certain type of mosquito which feeds on humans. People who get malaria are typically very sick with high fevers, shaking chills, and flu-like illness.",
    symptoms: [
      {
        // agetype: [[4, 'infant'], [10, 'teen'], [18, 'teenager'], [25, 'youth'], [100, 'adult']],
        img: "https://images.pexels.com/photos/2128817/pexels-photo-2128817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",   
        type: "headache",
        cause: ['nausea', 'vomiting', 'pain in the eyes when looking into bright lights (photophobia),', 'dizziness', 'vertigo',],
        more: " Headache is defined as a pain arising from the head or upper neck of the body. The pain originates from the tissues and structures that surround the skull or the brain because the brain itself has no nerves that give rise to the sensation of pain (pain fibers)."
      },
      {
        img: "https://images.pexels.com/photos/3807629/pexels-photo-3807629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        type: "fever",
        cause: ["sweating", "chills and shivering", "headache", "muscle aches", 'loss of appetite', "dehydration"],
        more: "A fever is a body temperature that is higher than normal. A normal temperature can vary from person to person, but it is usually around 98.6 F. A fever is not a disease. It is usually a sign that your body is trying to fight an illness or infection. Infections cause most fevers."
      },
      {
        type: "chills",
        img: "data:image/jpeg;base64,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",
        cause: ['goosebumps', 'muscle cramping', 'dizziness', 'fatigue', 'nausea and vomiting'],
         more: "The term “chills” refers to a feeling of being cold without an apparent cause. You get this feeling when your muscles repeatedly expand and contract and the vessels in your skin constrict. Chills can occur with a fever and cause shivering or shaking. Your body chills can be constant."
      },
      {
        type: "vomiting",
        cause: ["abdominal pain", "diarrhea", "fever", "lightheadedness", "vertigo", "rapid pulse", "excessive sweating", "dry mouth"],
        more: "Nausea and vomiting are not diseases, but rather are symptoms of many different conditions, such as infection ('stomach flu'), food poisoning, motion sickness, overeating, blocked intestine, illness, concussion or brain injury, appendicitis and migraines"
      },
      {
        type: "fatigue",
        cause: ["soreness", "localized pain", "shortness of breath", "muscle twitching", "a weak grip", "muscle cramps"],
         more: "Chronic fatigue syndrome (CFS) is a condition that causes you to feel exhausted and weak, no matter how much rest or sleep you get. It often causes insomnia. Because your body doesn't feel rested or replenished, CFS can also cause aches in the muscles and joints throughout your body."
      },
    ],
    medication: [
        {
          type: "headache",
          drugs: [
              {
                  name: "aspirin",
                  about: "Aspirin is used to reduce fever and relieve mild to moderate pain from conditions such as muscle aches, toothaches, common cold, and headaches. It may also be used to reduce pain and swelling in conditions such as arthritis. Aspirin is known as a salicylate and a nonsteroidal anti-inflammatory drug (NSAID).",
                  ageLimit: ["pregnancy", "infant"],
                  prescription: "Ask your doctor"
              },
              {
                name: "tylenol or acetaminophen",
                about: "Acetaminophen is used to relieve mild to moderate pain from headaches, muscle aches, menstrual periods, colds and sore throats, toothaches, backaches, and reactions to vaccinations (shots), and to reduce fever. Paracetamol, also known as acetaminophen, is a medication used to treat pain and fever. ",
                ageLimit: ["none"],
                prescription: "Ask your doctor",
              },
          ]
        },
        {
            type: "fever",
            drugs: [
                {
                    name: "tylenol or acetaminophen",
                    about: "Acetaminophen is used to relieve mild to moderate pain from headaches, muscle aches, menstrual periods, colds and sore throats, toothaches, backaches, and reactions to vaccinations (shots), and to reduce fever. Paracetamol, also known as acetaminophen, is a medication used to treat pain and fever. ",
                    ageLimit: ["none"],
                    prescription: "Ask your doctor",
                },
                {
                    name: "ibuprofen",
                    about: "Ibuprofen is an everyday painkiller for a range of aches and pains, including back pain, period pain, toothache. It also treats inflammation such as strains and sprains, and pain from arthritis. It's available as tablets and capsules, and as a syrup that you swallow.",
                    ageLimit: ["pregnacy"],
                    prescription: "Ask your doctor"
                },
            ]
        },
        {
            type:"chills",
            drugs: [
                {
                    name: "ibuprofen",
                    about: "Ibuprofen is an everyday painkiller for a range of aches and pains, including back pain, period pain, toothache. It also treats inflammation such as strains and sprains, and pain from arthritis. It's available as tablets and capsules, and as a syrup that you swallow.",
                    ageLimit: ["pregnacy"],
                    prescription: "Ask your doctor"
                  },
                  {
                      name: "aspirin",
                      about: "Aspirin is used to reduce fever and relieve mild to moderate pain from conditions such as muscle aches, toothaches, common cold, and headaches. It may also be used to reduce pain and swelling in conditions such as arthritis. Aspirin is known as a salicylate and a nonsteroidal anti-inflammatory drug (NSAID).",
                      ageLimit: ["pregnancy", "infant"],
                      prescription: "Ask your doctor"
                  },
            ]
        },
        {
          type: "vomiting",
          drugs: [
              {
                name: 'promethazine (Phenergan),',
                about: ' It is used to treat allergies, trouble sleeping, and nausea. It may help with some symptoms associated with the common cold.',
                ageLimit: ['infant'],
                prescription: "Ask your doctor"
              },
            {
                name: "prochlorperazine (Compazine),",
                about: "Prochlorperazine is also used to control severe nausea and vomiting",
                ageLimit: ["pregnacy", "infant"],
                prescription: "Always Ask your doctor"
            }
          ]
        }, 
        {
            type: "fatigue",
            drugs: [
                {
                    name: "tylenol or acetaminophen",
                    about: "Acetaminophen is used to relieve mild to moderate pain from headaches, muscle aches, menstrual periods, colds and sore throats, toothaches, backaches, and reactions to vaccinations (shots), and to reduce fever. Paracetamol, also known as acetaminophen, is a medication used to treat pain and fever. ",
                    ageLimit: ["none"],
                    prescription: "Ask your doctor",
                },
                {
                    name: "ibuprofen",
                    about: "Ibuprofen is an everyday painkiller for a range of aches and pains, including back pain, period pain, toothache. It also treats inflammation such as strains and sprains, and pain from arthritis. It's available as tablets and capsules, and as a syrup that you swallow.",
                    ageLimit: ["pregnacy"],
                    prescription: "Ask your doctor"
                  },
            ]
        }
    ]
  },
  {
    type: "typhoid",
    more: "Typhoid is a bacterial infection that can lead to a high fever, diarrhea, and vomiting. It can be fatal. It is caused by the bacteria Salmonella typhi. The infection is often passed on through contaminated food and drinking water, and it is more prevalent in places where handwashing is less frequent.",
    symptoms: [
        // {
        //     // agetype: [[4, 'infant'], [10, 'teen'], [18, 'teenager'], [25, 'youth'], [100, 'adult']],
        //     img: "https://images.pexels.com/photos/2128817/pexels-photo-2128817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",   
        //     type: "headache",
        //     signs: ['nausea', 'vomiting', 'pain in the eyes when looking into bright lights (photophobia),', 'dizziness', 'vertigo',],
        //     more: " Headache is defined as a pain arising from the head or upper neck of the body. The pain originates from the tissues and structures that surround the skull or the brain because the brain itself has no nerves that give rise to the sensation of pain (pain fibers)."
        // }, 
        {
            img: "https://images.pexels.com/photos/2128817/pexels-photo-2128817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",   
            type: "stomachpain",
            cause: ['nausea', 'vomiting', 'fever', 'abdominal cramping', 'gas',],
            more: " Headache is defined as a pain arising from the head or upper neck of the body. The pain originates from the tissues and structures that surround the skull or the brain because the brain itself has no nerves that give rise to the sensation of pain (pain fibers)."
        },  
        {
            img: "https://images.pexels.com/photos/3958565/pexels-photo-3958565.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            type: "diarrhea",
            cause: ["gas and bloating", "pains and cramping", "fatigue", "Food Intolerance."],
            more: "Irritable bowel syndrome (IBS) is a collection of symptoms such as cramping, abdominal pain, bloating, diarrhea, and constipation. "
          },
          {
            img: "https://images.pexels.com/photos/4114713/pexels-photo-4114713.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            type: "cough",
            cause: ["catarrh", "smoke", "Asthma", "Viruses and bacteria", "Medicines"],
            more: "A cough, also known as tussis, is a voluntary or involuntary act that clears the throat and breathing passage of foreign particles, microbes, irritants, fluids, and mucus; it is a rapid expulsion of air from the lungs. Coughing can be done deliberately or as part of a reflex."
          }
    ],  
    medication: [
      {
        type: "cough",
        drugs: [
            {
                name: "aspirin",
                about: "Aspirin is used to reduce fever and relieve mild to moderate pain from conditions such as muscle aches, toothaches, common cold, and headaches. It may also be used to reduce pain and swelling in conditions such as arthritis. Aspirin is known as a salicylate and a nonsteroidal anti-inflammatory drug (NSAID).",
                ageLimit: ["pregnancy", "infant"],
                prescription: "Ask your doctor"
            },
            {
              name: "tylenol or acetaminophen",
              about: "Acetaminophen is used to relieve mild to moderate pain from headaches, muscle aches, menstrual periods, colds and sore throats, toothaches, backaches, and reactions to vaccinations (shots), and to reduce fever. Paracetamol, also known as acetaminophen, is a medication used to treat pain and fever. ",
              ageLimit: ["none"],
              prescription: "Ask your doctor",
            },
        ]
      },
      {
          type: "stomachpain",
          drugs: [
              {
                  name: "tylenol or acetaminophen",
                  about: "Acetaminophen is used to relieve mild to moderate pain from headaches, muscle aches, menstrual periods, colds and sore throats, toothaches, backaches, and reactions to vaccinations (shots), and to reduce fever. Paracetamol, also known as acetaminophen, is a medication used to treat pain and fever. ",
                  ageLimit: ["none"],
                  prescription: "Ask your doctor",
              },
              {
                  name: "ibuprofen",
                  about: "Ibuprofen is an everyday painkiller for a range of aches and pains, including back pain, period pain, toothache. It also treats inflammation such as strains and sprains, and pain from arthritis. It's available as tablets and capsules, and as a syrup that you swallow.",
                  ageLimit: ["pregnacy"],
                  prescription: "Ask your doctor"
              },
          ]
      },
      {
          type:"diarrhea",
          drugs: [
              {
                  name: "ibuprofen",
                  about: "Ibuprofen is an everyday painkiller for a range of aches and pains, including back pain, period pain, toothache. It also treats inflammation such as strains and sprains, and pain from arthritis. It's available as tablets and capsules, and as a syrup that you swallow.",
                  ageLimit: ["pregnacy"],
                  prescription: "Ask your doctor"
                },
                {
                    name: "aspirin",
                    about: "Aspirin is used to reduce fever and relieve mild to moderate pain from conditions such as muscle aches, toothaches, common cold, and headaches. It may also be used to reduce pain and swelling in conditions such as arthritis. Aspirin is known as a salicylate and a nonsteroidal anti-inflammatory drug (NSAID).",
                    ageLimit: ["pregnancy", "infant"],
                    prescription: "Ask your doctor"
                },
          ]
      },
    ]
  },
  // {
  //   type: "pains"
  // }
]