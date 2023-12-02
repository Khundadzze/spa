import React from 'react';
import { useParams } from 'react-router-dom';

const FactsData = {
  Id1:  'Fact 1:Harry James Potter is known as "The Boy Who Lived" because, as an infant, he survived an attack by Lord Voldemort',
  Id2:  'Fact 2:After the death of his parents, Lily and James Potter, Harry was left in the care of his non-magical (Muggle) relatives, the Dursleys',
  Id3:  'Fact 3:Harry becomes the Seeker for the Gryffindor Quidditch team during his first year at Hogwarts School of Witchcraft and Wizardry',
}

const FactsPage = () => {
  const {factId} = useParams();
   const selectedFact = factsData[factId];
    return (
      <div>
        {selectedFact ? (
          <p>{selectedFact}</p>
        ):
         (
          <p>Fact with ID {factId} not found.</p>
        )}
    </div>
  );
};



export default FactPage;