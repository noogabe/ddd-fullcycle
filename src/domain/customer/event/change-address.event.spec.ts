import EventDispatcher from "../../@shared/event/event-dispatcher";
import ChangeAddressEvent from "./change-address.event";
import EnviaConsoleLogHandler from "./handler/send-console-log.handler";

describe("change address event notification", () => {

    it("should notify all events when change address", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new EnviaConsoleLogHandler();
        const spyEventHandler = jest.spyOn(eventHandler, "handle");

        eventDispatcher.register("ChangeAddressEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["ChangeAddressEvent"][0]).toMatchObject(eventHandler);
        expect(eventDispatcher.getEventHandlers["ChangeAddressEvent"].length).toBe(1);

        const changeAddressEvent = new ChangeAddressEvent({
            id: "1",
            name: "Customer Name",
            address: "Customer Address"
        });
        
        eventDispatcher.notify(changeAddressEvent);
        expect(spyEventHandler).toHaveBeenCalled();
    });
});