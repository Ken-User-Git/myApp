import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CSC 262 App Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">CSC 262 App Example</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
          <IonCardTitle>CSC 262</IonCardTitle>
          <IonCardSubtitle>Card 1</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
