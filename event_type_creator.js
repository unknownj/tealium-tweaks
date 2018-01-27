function createEvent(event_name){
  if(!window.utag[event_name]){
    console.log("Creating utag." + event_name + "() event");
    window.utag[event_name] = function (a,c,d){
      return this.track({
        event:event_name,
        data:a,
        cfg:{
          cb:c,
          uids:d
        }
      })
    };
  }
}
