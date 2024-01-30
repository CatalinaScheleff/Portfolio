import {
  WorkCon,
  WorkContent1,
  WorkContent2,
  WorkContent3,
  WorkContentCon,
  WorkMenuCon,
  WorkTitle,
  WorkTitleCon,
} from "../components/work/WorkElements";

export const Work = () => {
  return (
    <>
      <WorkCon id="WorkCon">
        <WorkTitleCon id="WorkTitleCon">
            <WorkTitle>Work</WorkTitle>
        </WorkTitleCon>
        <WorkMenuCon id="WorkMenuCon"></WorkMenuCon>
        <WorkContentCon id="WorkContentCon">
          <WorkContent1 id="WorkContent1"></WorkContent1>
          <WorkContent2 id="WorkContent2"></WorkContent2>
          <WorkContent3 id="WorkContent3"></WorkContent3>
        </WorkContentCon>
      </WorkCon>
    </>
  );
};
