import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationStack {
            VStack(alignment: .leading, spacing: 24) {
                VStack(alignment: .leading, spacing: 10) {
                    Image(systemName: "textformat.abc")
                        .font(.system(size: 42, weight: .semibold))
                        .foregroundStyle(.tint)

                    Text("Capital Safari")
                        .font(.largeTitle.weight(.bold))

                    Text("Make “Jengod” lowercase on wikipedia.org.")
                        .font(.title3)
                        .foregroundStyle(.secondary)
                }

                VStack(alignment: .leading, spacing: 14) {
                    Label("Open Settings", systemImage: "gear")
                        .font(.headline)
                    Text("Go to Safari → Extensions → Capital Safari and allow it on wikipedia.org.")
                        .foregroundStyle(.secondary)

                    Label("Turn it on", systemImage: "power")
                        .font(.headline)
                    Text("Return to Safari and reload a wikipedia.org page. The exact text “Jengod” will become “jengod”, including newly loaded content.")
                        .foregroundStyle(.secondary)
                }
                .padding(20)
                .background(.thinMaterial, in: RoundedRectangle(cornerRadius: 20, style: .continuous))

                Spacer()
            }
            .padding(24)
            .navigationTitle("Capital Safari")
        }
    }
}

#Preview {
    ContentView()
}
