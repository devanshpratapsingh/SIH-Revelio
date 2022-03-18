import React from 'react'
import Car from '../../../../components/DetailsCard/car';
const Places = () => {

    return(
        <div className="search-reault">
            <Car 
                name="Albert Hall"
                image="https://drive.google.com/uc?export=view&id=1YFEhKvHOtxP8U2rc_9QfB44QqWgq5JjD"
                desc="The Albert Hall Museum in Jaipur, is the oldest museum of the state and functions as the state museum of Rajasthan, India. The building is situated in Ram Niwas garden outside the city wall opposite New gate and is a fine example of Indo-Saracenic architecture. It is also called the Government Central Museum."
                prise="120"
                state="Rajasthan"
                city="Jaipur"
            />
            <Car 
                name="Amer Fort"
                image="https://drive.google.com/uc?export=view&id=1tJneDs4fACQpFt5F8FU6d5OgOgNP3fRl"
                desc="Amber or Amer, is a city near Jaipur city in Jaipur district in the Indian state of Rajasthan. It is now a part of the Jaipur Municipal Corporation.

                The picturesque situation of Amber at the mouth of a rocky mountain gorge, in which nestles a lake, has attracted the admiration of travellers, including Victor Jacquemont and Reginald Heber.[1] It is seen to be a remarkable example for its combined Rajput-Mughal architecture. The Amber Fort, a UNESCO World Heritage Site, is the top tourist attraction in the Jaipur area."
                prise="100"
                state="Rajasthan"
                city="Jaipur"
            /> 
            <Car 
            name="Albert Hall"
            image="https://drive.google.com/uc?export=view&id=1kgs7YgmMFIKCD2cipqq-3_W3uZ4DrWOD"
            desc="Masroor in Himachal Pradesh has a fascinating attraction. The Rock-cut Temples are cut out of
            a single rock to make complex structures. The group of 15 temples house intricately carved
            sculptures that reflect the Indo-Aryan architecture of the 7th century. Witness the expert
            craftsmanship that has been preserved in the rock surface for centuries when you visit the
            temples at Masroor."
            prise="120"
            state="Himachal Pradesh"
            city="Masroor"
        />
        </div>
    )
}

export default Places;