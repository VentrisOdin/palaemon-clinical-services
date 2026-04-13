import BrandLogo from "../common/BrandLogo";

function RouteTransition() {
  return (
    <div className="route-transition">
      <div className="route-transition-inner">
        <BrandLogo size={54} />
        <p className="route-transition-text">Loading</p>
      </div>
    </div>
  );
}

export default RouteTransition;